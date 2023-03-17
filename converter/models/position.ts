import BigNumber from "bignumber.js";

export class Position {
  x: BigNumber;
  y: BigNumber;

  constructor(x = new BigNumber('0'), y = new BigNumber('0')) {
    this.x = x;
    this.y = y;
  }
}
