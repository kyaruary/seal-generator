import { SealOptions } from "./interface";
var SealGenerator = /** @class */ (function () {
    function SealGenerator(id, options) {
        this.initialized = false;
        this.DEFAULT_COMPANY_NAME = "公司名字";
        this.DEFAULT_SEAL_TYPE = "公章名";
        this.dom = document.getElementById(id);
        if (!this.dom) {
            throw "can not find this dom via id";
        }
        if (this.dom instanceof HTMLCanvasElement) {
            this.canvas = this.dom;
        }
        else {
            this.dom.style.display = this.dom.style.display === "inline" ? "block" : this.dom.style.display;
            this.canvas = document.createElement("canvas");
            this.dom.append(this.canvas);
        }
        !options && (options = new SealOptions({}));
        this.options = options;
        this.canvas.height = this.options.canvasWidth;
        this.canvas.width = this.options.canvasWidth;
        this.ctx = this.canvas.getContext("2d");
        this.ctx.lineWidth = this.options.lineWidth;
        this.ctx.strokeStyle = this.options.color;
        this.ctx.fillStyle = this.options.color;
        this.draw(this.DEFAULT_COMPANY_NAME, this.DEFAULT_SEAL_TYPE);
        this.initialized = true;
    }
    SealGenerator.prototype.draw = function (company_name, seal_type) {
        if (this.initialized) {
            this.ctx.restore();
        }
        else {
            this.ctx.clearRect(0, 0, this.options.canvasWidth, this.options.canvasWidth);
            this.drawCircle();
            this.drawStar();
            this.ctx.save();
        }
        this.drawSealType(seal_type);
        this.drawCompanyName(company_name);
    };
    SealGenerator.prototype.drawCircle = function () {
        this.ctx.beginPath();
        this.ctx.arc(this.options.center_point, this.options.center_point, this.options.center_point - this.options.lineWidth, 0, Math.PI * 2, false);
        this.ctx.stroke();
        this.ctx.closePath();
    };
    SealGenerator.prototype.drawSealType = function (seal_type) { };
    SealGenerator.prototype.drawCompanyName = function (company_name) { };
    SealGenerator.prototype.drawStar = function () {
        this.ctx.beginPath();
        for (var i = 0; i < 5; i++) {
            var out_x = Math.cos(((18 + i * 72) / 180) * Math.PI) * this.options.starOutline + this.options.center_point;
            var out_y = -Math.sin(((18 + i * 72) / 180) * Math.PI) * this.options.starOutline + this.options.center_point;
            var inner_x = Math.cos(((54 + i * 72) / 180) * Math.PI) * this.options.starInnerline + this.options.center_point;
            var inner_y = -Math.sin(((54 + i * 72) / 180) * Math.PI) * this.options.starInnerline + this.options.center_point;
            this.ctx.lineTo(out_x, out_y);
            this.ctx.lineTo(inner_x, inner_y);
        }
        console.log(this.options);
        this.ctx.fill();
        this.ctx.closePath();
    };
    return SealGenerator;
}());
export { SealGenerator };
