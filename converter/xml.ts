import { Block, BlockType, getAvailableBlock, getBlockSize } from './models/block';

import BigNumber from 'bignumber.js'
import { Position } from './models/position';

const ONE_CELL_WIDTH_IN_UNITY = new BigNumber('0.2401')
const LEVEL_WIDTH_IN_UNITY = new BigNumber('18')
const STRUCTURE_STARTING_POSITION = new Position(new BigNumber('2'), new BigNumber('-3.5'))

function convertToXML(functionsString: string): [string, Array<Array<number>>, Array<Array<number>>] {
  const GRID_WIDTH = 20;
  const GRID_HEIGHT = 16;
  let output = '<?xml version="1.0" encoding="utf-16"?>\n'
  const [gameObjectsXMLString, grid, gridBeforeShift, levelWidth, levelHeight] = parseGameObjects(functionsString, GRID_WIDTH, GRID_HEIGHT)
  const levelXMLString = parseLevel(levelWidth)
  const cameraXMLString = parseCamera(levelWidth, levelHeight)
  const birdsXMLString = parseBirds()
  const slingshotXMLString = parseSlingshot()

  output += levelXMLString
  output += cameraXMLString
  output += birdsXMLString
  output += slingshotXMLString
  output += gameObjectsXMLString
  output += `</Level>`
  return [output, grid, gridBeforeShift]
}

function parseGameObjects(functionsString: string, gridWidth: number, gridHeight: number): [string, Array<Array<number>>, Array<Array<number>>, BigNumber, BigNumber] {
  let xmlString = ''
  xmlString += `  <GameObjects>\n`
  const [tempBlocks, gridBeforeShift] = getBlocksWithPosition(functionsString, gridWidth, gridHeight)
  const [blocks, grid] = shiftBlocksOnGrid(tempBlocks, gridBeforeShift)
  const levelWidth = getGridContentWidth(grid)
  const levelHeight = getGridContentHeight(grid)
  for (const block of blocks) {
    const { width, height } = getBlockSize(BlockType[block.id.toUpperCase() as keyof typeof BlockType])
    const blockWidth = new BigNumber(width)
    const blockHeight = new BigNumber(height)
    const xBlockCenter = blockWidth.multipliedBy(ONE_CELL_WIDTH_IN_UNITY).dividedBy(2)
    const yBlockCenter = blockHeight.multipliedBy(ONE_CELL_WIDTH_IN_UNITY).dividedBy(2)
    const MAGIC = width > 1 ? ONE_CELL_WIDTH_IN_UNITY : new BigNumber('0')
    const xPosition = block.position.x.multipliedBy(ONE_CELL_WIDTH_IN_UNITY).plus(xBlockCenter).plus(STRUCTURE_STARTING_POSITION.x).minus(MAGIC)
    const yPosition = block.position.y.multipliedBy(ONE_CELL_WIDTH_IN_UNITY).plus(yBlockCenter).plus(STRUCTURE_STARTING_POSITION.y)
    xmlString += `    <Block type="${block.type}" material="wood" x="${xPosition.toFixed()}" y="${yPosition.toFixed()}" rotation="${block.rotation}" />\n`
  }
  xmlString += `  </GameObjects>\n`
  return [xmlString, grid, gridBeforeShift, levelWidth, levelHeight]
}

function parseBirds() {
  return '  <Birds>\n    <Bird type="BirdRed" />\n  </Birds>\n';
}

function parseSlingshot() {
  const SLINGSHOT_POSITION = { x: -9, y: -2.5 };
  return `  <Slingshot x="${SLINGSHOT_POSITION.x}" y="${SLINGSHOT_POSITION.y}" />\n`;
}

function parseLevel(levelWidth: BigNumber) {
  return `<Level width="${parseInt(levelWidth.dividedBy(LEVEL_WIDTH_IN_UNITY).toFixed()) + 3}">\n`;
}

function parseCamera(levelWidth: BigNumber, levelHeight: BigNumber) {
  const CAMERA_ASPECT_RATIO = new BigNumber('1.6')
  const MAX_ZOOM_LEVEL = new BigNumber('5')
  const rawCameraSize = BigNumber.max(levelHeight.multipliedBy(CAMERA_ASPECT_RATIO), levelWidth).multipliedBy(2)
  const cameraSize = BigNumber.max(rawCameraSize, 17)
  const cameraMinWidth = cameraSize;
  const cameraMaxWidth = cameraSize.plus(MAX_ZOOM_LEVEL);
  return `  <Camera x="${STRUCTURE_STARTING_POSITION.x.toFixed()}" y="0" minWidth="${cameraMinWidth.toFixed()}" maxWidth="${cameraMaxWidth.toFixed()}" />\n`;
}

function shiftBlocksOnGrid(blocks: Array<Block>, grid: Array<Array<number>>): [Array<Block>, Array<Array<number>>] {
  const copiedGrid: Array<Array<number>> = JSON.parse(JSON.stringify(grid))
  let shiftAmount = copiedGrid[0].length
  for (let i = 0; i < copiedGrid[0].length; i++) {
    for (let j = 0; j < copiedGrid.length; j++) {
      if (copiedGrid[j][i] !== 0) {
        shiftAmount = Math.min(shiftAmount, i)
      }
    }
  }

  for (const block of blocks) {
    block.position.x = block.position.x.minus(shiftAmount)
  }

  for (let i = 0; i < copiedGrid.length; i++) {
    copiedGrid[i] = copiedGrid[i].slice(shiftAmount)
    for (let j = 0; j < shiftAmount; j++) {
      copiedGrid[i].push(0)
    }
  }
  return [blocks, copiedGrid]
}

function getBlocksWithPosition(functionsString: string, gridWidth: number, gridHeight: number): [Array<Block>, Array<Array<number>>] {
  const FUNCTION_PREFIX = "ab_drop(";

  const blocks = []
  let grid: Array<Array<number>> = []
  for (let i = 0; i < gridHeight; i++) {
    grid.push([])
    for (let j = 0; j < gridWidth; j++) {
      grid[i].push(0)
    }
  }

  const lines = functionsString.split('\n')
  for (const line of lines) {
    if (line.substring(0, FUNCTION_PREFIX.length) !== FUNCTION_PREFIX) {
      continue;
    }

    const commaIndex = line.indexOf(",");
    const extractedBlockType = line
      .substring(FUNCTION_PREFIX.length + 1, commaIndex - 1)
      .toUpperCase();
    const blockType = BlockType[extractedBlockType as keyof typeof BlockType];
    const extractedSlotPosition = line
      .substring(commaIndex + 1)
      .split(")")[0]
      .trim();
    const slotPosition = parseInt(extractedSlotPosition, 10);
    const block = getAvailableBlock(blockType);
    const [position, newGrid] = placeBlockOnGrid(blockType, slotPosition, grid)
    grid = newGrid
    block.position = new Position(new BigNumber(position.x), new BigNumber(position.y))
    blocks.push(block)
  }

  return [blocks, grid]
}

function placeBlockOnGrid(blockType: BlockType, slotPosition: number, grid: Array<Array<number>>): [{ x: number, y: number }, Array<Array<number>>] {
  const copiedGrid: Array<Array<number>> = JSON.parse(JSON.stringify(grid))
  const blockSize = getBlockSize(blockType) // Assume that width always be an odd number
  const halfWidth = (blockSize.width - 1) / 2
  const allowPosition = { x: slotPosition, y: copiedGrid.length - 1 }

  for (let i = copiedGrid.length - 1; i >= 0; i--) {
    if (copiedGrid[i][slotPosition] !== 0) {
      break
    }
    if (blockSize.width > 1) {

      let isEmpty = true
      // Check left and right side of a wide block that it is empty
      for (let j = 1; j <= halfWidth; j++) {
        const isBoundaryIntruded = slotPosition - j < 0 || slotPosition + j > copiedGrid[0].length - 1
        if (isBoundaryIntruded || copiedGrid[i][slotPosition - j] !== 0 || copiedGrid[i][slotPosition + j] !== 0) {
          isEmpty = false
          break
        }
      }

      if (!isEmpty) {
        break
      }
    }
    allowPosition.y = i
  }

  copiedGrid[allowPosition.y][slotPosition] = 1
  if (blockSize.width > 1) {
    for (let j = 1; j <= halfWidth; j++) {
      copiedGrid[allowPosition.y][slotPosition - j] = 1
      copiedGrid[allowPosition.y][slotPosition + j] = 1
    }
  }
  if (blockSize.height > 1) {
    for (let j = 1; j < blockSize.height; j++) {
      copiedGrid[allowPosition.y + j][slotPosition] = 1
    }
  }

  return [allowPosition, copiedGrid]
}

function getGridContentWidth(grid: Array<Array<number>>) {
  let temp = 0
  for (const row of grid) {
    const rowSum = row.reduce((a, b) => a + b, 0)
    if (rowSum > temp) {
      temp = rowSum
    }
  }
  const width = new BigNumber(temp)
  return STRUCTURE_STARTING_POSITION.x.abs().plus(width.multipliedBy(ONE_CELL_WIDTH_IN_UNITY))
}

function getGridContentHeight(grid: Array<Array<number>>) {
  let previousNonEmpty = 0
  for (let i = 0; i < grid.length; i++) {
    const row = grid[i]
    const rowSum = row.reduce((a, b) => a + b, 0)
    if (rowSum > 0) {
      previousNonEmpty = i
    }
  }
  const height = new BigNumber(previousNonEmpty + 1)
  return STRUCTURE_STARTING_POSITION.y.abs().plus(height.multipliedBy(ONE_CELL_WIDTH_IN_UNITY))
}

function printGrid(grid: Array<Array<number>>) {
  let output = ''
  for (let i = grid.length - 1; i >= 0; i--) {
    const row = grid[i]
    for (const item of row) {
      output += item
    }
    output += '\n'
  }
  console.log(output)
}

export {
  convertToXML,
  printGrid
}