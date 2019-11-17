var SealOptions = /** @class */ (function () {
    function SealOptions(_a) {
        var _b = _a.color, color = _b === void 0 ? "red" : _b, _c = _a.lineWidth, lineWidth = _c === void 0 ? 7 : _c, _d = _a.canvasWidth, canvasWidth = _d === void 0 ? 200 : _d;
        this.color = color;
        this.lineWidth = lineWidth;
        this.canvasWidth = canvasWidth;
        this.center_point = this.canvasWidth / 2;
        this.starOutline = Math.floor(this.canvasWidth / 4);
        this.starInnerline = this.starOutline / 2;
    }
    return SealOptions;
}());
export { SealOptions };
