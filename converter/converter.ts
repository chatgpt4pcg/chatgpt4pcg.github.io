import { Block, BlockType, getAvailableBlock, getBlockSize } from './models/block';

import BigNumber from 'bignumber.js'
import { Position } from './models/position';

export const GRID_WIDTH = 20;
export const GRID_HEIGHT = 16;
export const FUNCTION_PREFIX = "ab_drop(";
export const ONE_CELL_WIDTH_IN_UNITY = new BigNumber('0.2401')
export const LEVEL_WIDTH_IN_UNITY = new BigNumber('18')
export const STRUCTURE_STARTING_POSITION = new Position(new BigNumber('2'), new BigNumber('-3.5'))

export function shiftBlocksOnGrid(blocks: Array<Block>, grid: number[][]): [Array<Block>, number[][]] {
  const newGrid = grid.map(row => [...row])
  
  let shiftAmount = newGrid[0].length
  for (let i = 0; i < newGrid[0].length; i++) {
    for (const row of newGrid) {
      if (row[i] !== 0) {
        shiftAmount = Math.min(shiftAmount, i)
      }
    }
  }

  for (const block of blocks) {
    block.position.x = block.position.x.minus(shiftAmount)
  }

  for (let i = 0; i < newGrid.length; i++) {
    newGrid[i] = newGrid[i].slice(shiftAmount)
    for (let j = 0; j < shiftAmount; j++) {
      newGrid[i].push(0)
    }
  }
  return [blocks, newGrid]
}

export function getBlocksWithPosition(functionsString: string, gridWidth: number, gridHeight: number): [Array<Block>, number[][]] {
  const blocks = []
  let grid = initializeGrid(gridWidth, gridHeight)

  const lines = functionsString.split('\n')
  for (const line of lines) {
    if (line.substring(0, FUNCTION_PREFIX.length) !== FUNCTION_PREFIX) {
      continue;
    }

    const blockType = getBlockTypeFromLine(line)
    const slotPosition = getSlotPositionFromLine(line)
    const block = getAvailableBlock(blockType);

    const position = getBlockPositionOnGrid(blockType, slotPosition, grid)
    grid = placeBlockOnGrid(grid, position, slotPosition, getBlockSize(blockType))

    block.position = new Position(new BigNumber(position.x), new BigNumber(position.y))
    blocks.push(block)
  }

  return [blocks, grid]
}

function getBlockTypeFromLine(line: string): BlockType {
  const commaIndex = line.indexOf(",");
  const extractedBlockType = line
    .substring(FUNCTION_PREFIX.length + 1, commaIndex - 1)
    .toUpperCase();
  const blockType = BlockType[extractedBlockType as keyof typeof BlockType];
  return blockType
}

function getSlotPositionFromLine(line: string): number {
  const commaIndex = line.indexOf(",");
  const extractedSlotPosition = line
    .substring(commaIndex + 1)
    .split(")")[0]
    .trim();
  const slotPosition = parseInt(extractedSlotPosition, 10);
  return slotPosition
}

export function getBlockPositionOnGrid(blockType: BlockType, slotPosition: number, grid: number[][]) {
  const blockSize = getBlockSize(blockType) // Assume that width always be an odd number
  const halfWidth = (blockSize.width - 1) / 2
  const isWideBlock = blockSize.width > 1

  const allowPosition = { x: slotPosition, y: grid.length - 1 }

  for (let rowIndex = grid.length - 1; rowIndex >= 0; rowIndex--) {
    if (grid[rowIndex][slotPosition] !== 0) {
      break
    }

    if (isWideBlock && !isSpaceEnoughForWideBlock(grid, rowIndex, slotPosition, halfWidth)) {
      break
    }
    allowPosition.y = rowIndex
  }

  return allowPosition
}

function isSpaceEnoughForWideBlock(grid: number[][], rowIndex: number, slotPosition: number, halfWidth: number) {
  let isEmpty = true;
  // Check left and right side of a wide block that it is empty
  for (let j = 1; j <= halfWidth; j++) {
    const isBoundaryIntruded = slotPosition - j < 0 || slotPosition + j > grid[0].length - 1;
    if (isBoundaryIntruded || grid[rowIndex][slotPosition - j] !== 0 || grid[rowIndex][slotPosition + j] !== 0) {
      isEmpty = false;
      break;
    }
  }
  return isEmpty;
}

function placeBlockOnGrid(grid: number[][], allowPosition: { x: number, y: number }, slotPosition: number, blockSize: { width: number, height: number }) {
  const newGrid = grid.map(row => [...row])
  const isWideBlock = blockSize.width > 1
  const isTallBlock = blockSize.height > 1
  const halfWidth = (blockSize.width - 1) / 2

  newGrid[allowPosition.y][slotPosition] = 1;

  if (isWideBlock) {
    for (let j = 1; j <= halfWidth; j++) {
      newGrid[allowPosition.y][slotPosition - j] = 1;
      newGrid[allowPosition.y][slotPosition + j] = 1;
    }
  }
  if (isTallBlock) {
    for (let j = 1; j < blockSize.height; j++) {
      newGrid[allowPosition.y + j][slotPosition] = 1;
    }
  }

  return newGrid
}

export function getGridContentWidth(grid: number[][]) {
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

export function getGridContentHeight(grid: number[][]) {
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

export function initializeGrid(width: number, height: number) {
  const grid: number[][] = []
  for (let i = 0; i < height; i++) {
    grid.push([])
    for (let j = 0; j < width; j++) {
      grid[i].push(0)
    }
  }

  return grid
}

export function printGrid(grid: number[][]) {
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