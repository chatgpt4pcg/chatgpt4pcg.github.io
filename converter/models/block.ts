import { Position } from "./position";
import { Size } from "./size";

export class Block {
  id: string;
  type: string;
  rotation: number;
  position: Position;
  readonly size: Size;

  constructor(id: string, type: string, rotation: number) {
    this.id = id;
    this.type = type;
    this.rotation = rotation;
    this.position = new Position();
    this.size = getBlockSize(BlockType[id.toUpperCase() as keyof typeof BlockType]);
  }
}
export enum BlockType {
  B31,
  B13,
  B11
}
export function getAvailableBlock(type: BlockType) {
  if (type === BlockType.B31) {
    return new Block("b31", "RectSmall", 0);
  } else if (type === BlockType.B13) {
    return new Block("b13", "RectSmall", 90);
  } else if (type === BlockType.B11) {
    return new Block("b11", "SquareTiny", 0);
  }

  throw new Error(`BlockType does not exist.`);
}
export function getBlockSize(type: BlockType) {
  if (type === BlockType.B31) {
    return new Size(3, 1);
  } else if (type === BlockType.B13) {
    return new Size(1, 3);
  } else if (type === BlockType.B11) {
    return new Size(1, 1);
  }

  throw new Error(`BlockType does not exist.`);
}
