import { SealOptions } from "./interface";
export class SealGenerator {
  private options: SealOptions;
  private ctx: CanvasRenderingContext2D;
  private canvas: HTMLCanvasElement;
  private dom: HTMLElement | null;
  private initialized: boolean = false;
  private DEFAULT_COMPANY_NAME: string = "公司名字";
  private DEFAULT_SEAL_TYPE: string = "公章名";
  constructor(id: string, options?: SealOptions) {
    this.dom = document.getElementById(id);
    if (!this.dom) {
      throw "can not find this dom via id";
    }
    if (this.dom instanceof HTMLCanvasElement) {
      this.canvas = this.dom;
    } else {
      this.dom.style.display = this.dom.style.display === "inline" ? "block" : this.dom.style.display;
      this.canvas = document.createElement("canvas");
      this.dom.append(this.canvas);
    }
    !options && (options = new SealOptions({}));
    this.options = options;
    this.canvas.height = this.options.canvasWidth;
    this.canvas.width = this.options.canvasWidth;
    this.ctx = this.canvas.getContext("2d")!;
    this.ctx.lineWidth = this.options.lineWidth;
    this.ctx.strokeStyle = this.options.color;
    this.ctx.fillStyle = this.options.color;
    this.draw(this.DEFAULT_COMPANY_NAME, this.DEFAULT_SEAL_TYPE);
    this.initialized = true;
  }

  draw(company_name: string, seal_type: string) {
    if (this.initialized) {
      this.ctx.restore();
    } else {
      this.ctx.clearRect(0, 0, this.options.canvasWidth, this.options.canvasWidth);
      this.drawCircle();
      this.drawStar();
      this.ctx.save();
    }
    this.drawSealType(seal_type);
    this.drawCompanyName(company_name);
  }

  drawCircle() {
    this.ctx.beginPath();
    this.ctx.arc(this.options.center_point, this.options.center_point, this.options.center_point - this.options.lineWidth, 0, Math.PI * 2, false);
    this.ctx.stroke();
    this.ctx.closePath();
  }
  drawSealType(seal_type: string) {}
  drawCompanyName(company_name: string) {}

  drawStar() {
    this.ctx.beginPath();
    for (let i = 0; i < 5; i++) {
      const out_x = Math.cos(((18 + i * 72) / 180) * Math.PI) * this.options.starOutline + this.options.center_point;
      const out_y = -Math.sin(((18 + i * 72) / 180) * Math.PI) * this.options.starOutline + this.options.center_point;
      const inner_x = Math.cos(((54 + i * 72) / 180) * Math.PI) * this.options.starInnerline + this.options.center_point;
      const inner_y = -Math.sin(((54 + i * 72) / 180) * Math.PI) * this.options.starInnerline + this.options.center_point;
      this.ctx.lineTo(out_x, out_y);
      this.ctx.lineTo(inner_x, inner_y);
    }
    this.ctx.fill();
    this.ctx.closePath();
  }
}
