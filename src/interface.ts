export class SealOptions {
  color: string;
  lineWidth: number;
  canvasWidth: number;
  center_point: number;
  starOutline: number;
  starInnerline: number;
  constructor({ color = "red", lineWidth = 7, canvasWidth = 200 }) {
    this.color = color;
    this.lineWidth = lineWidth;
    this.canvasWidth = canvasWidth;
    this.center_point = this.canvasWidth / 2;
    this.starOutline = Math.floor(this.canvasWidth / 4);
    this.starInnerline = this.starOutline / 2;
  }
}
