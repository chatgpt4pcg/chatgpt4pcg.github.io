import { LEVEL_WIDTH_IN_UNITY, ONE_CELL_WIDTH_IN_UNITY, STRUCTURE_STARTING_POSITION, getBlocksWithPosition, getGridContentHeight, getGridContentWidth, shiftBlocksOnGrid } from "./converter"

import BigNumber from "bignumber.js"

function convertToXML(functionsString: string) {
  let output = '<?xml version="1.0" encoding="utf-16"?>\n'
  const [gameObjectsXMLString, grid] = parseGameObjects(functionsString)
  const levelWidth = getGridContentWidth(grid)
  const levelHeight = getGridContentHeight(grid)

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

  return output
}

function parseGameObjects(functionsString: string): [string, number[][], number[][]] {
  let xmlString = ''
  xmlString += `  <GameObjects>\n`

  const [tempBlocks, gridBeforeShift] = getBlocksWithPosition(functionsString)
  const [blocks, grid] = shiftBlocksOnGrid(tempBlocks, gridBeforeShift)

  for (const block of blocks) {
    const blockWidth = new BigNumber(block.size.width)
    const blockHeight = new BigNumber(block.size.height)

    const xBlockCenter = blockWidth.multipliedBy(ONE_CELL_WIDTH_IN_UNITY).dividedBy(2)
    const yBlockCenter = blockHeight.multipliedBy(ONE_CELL_WIDTH_IN_UNITY).dividedBy(2)
    const MAGIC = block.size.width > 1 ? ONE_CELL_WIDTH_IN_UNITY : new BigNumber('0')

    const xPosition = block.position.x.multipliedBy(ONE_CELL_WIDTH_IN_UNITY).plus(xBlockCenter).plus(STRUCTURE_STARTING_POSITION.x).minus(MAGIC)
    const yPosition = block.position.y.multipliedBy(ONE_CELL_WIDTH_IN_UNITY).plus(yBlockCenter).plus(STRUCTURE_STARTING_POSITION.y)

    xmlString += `    <Block type="${block.type}" material="wood" x="${xPosition.toFixed()}" y="${yPosition.toFixed()}" rotation="${block.rotation}" />\n`
  }

  xmlString += `  </GameObjects>\n`

  return [xmlString, grid, gridBeforeShift]
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

export {
  convertToXML
}