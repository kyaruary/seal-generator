import { config } from './config';
var SealGenerator = /** @class */ (function () {
    function SealGenerator(id, options) {
        this.start_angle = config.START_ANGLE;
        this.end_angle = config.END_ANGLE;
        this.DEFAULT_COMPANY_NAME = config.DEFAULT_COMPANY_NAME; // 默认公司名称
        this.DEFAULT_SEAL_TYPE = config.DEFAULT_SEAL_TYPE; // 默认公章类型
        this.seal_type_font_size = config.DEFAUTL_FONT_SIZE; // 默认公章类型文字大小
        // 根据寻找dom，如果没有抛出错误警告。
        this.dom = document.getElementById(id);
        if (!this.dom) {
            throw "can not find any dom by id:" + id;
        }
        // 如果不是canvas节点那么将非块级元素转化为块级元素并创建插入canvas节点
        if (this.dom instanceof HTMLCanvasElement) {
            this.canvas = this.dom;
        }
        else {
            this.dom.style.display = this.dom.style.display === "inline" ? "block" : this.dom.style.display;
            this.canvas = document.createElement("canvas");
            this.dom.append(this.canvas);
        }
        // 初始化配置项，没有配置参数则使用默认项
        this.options = this.initOptions(options);
        this.centerPoint = Math.floor(this.options.sealWidth / 2);
        this.lineWidth = Math.floor(this.options.sealWidth / 40);
        // 五角星大小为公章的1/5
        this.starOutSideCircle = this.options.sealWidth / 5;
        this.starInSideCircle = this.starOutSideCircle / 2.61803;
        // 设定canvas宽高和ctx属性
        this.canvas.height = this.options.sealWidth;
        this.canvas.width = this.options.sealWidth;
        this.ctx = this.canvas.getContext("2d");
        this.ctx.lineWidth = this.lineWidth;
        this.ctx.strokeStyle = this.options.color;
        this.ctx.fillStyle = this.options.color;
        // 初始化公章外圈和五角星
        this.draw(this.DEFAULT_COMPANY_NAME, this.DEFAULT_SEAL_TYPE);
    }
    /**
     * 绘制公章整体
     * @param {string} company_name
     * @param {string} seal_type
     * @memberof SealGenerator
     */
    SealGenerator.prototype.draw = function (company_name, seal_type) {
        this.ctx.clearRect(0, 0, this.options.sealWidth, this.options.sealWidth);
        this.drawCircle();
        this.drawStar();
        this.drawSealType(seal_type);
        this.drawCompanyName(company_name);
    };
    /**
     * 画公章外围圈
     * @memberof SealGenerator
     */
    SealGenerator.prototype.drawCircle = function () {
        this.ctx.beginPath();
        this.ctx.arc(this.centerPoint, this.centerPoint, this.centerPoint - this.lineWidth, 0, Math.PI * 2, false);
        this.ctx.stroke();
        this.ctx.closePath();
    };
    /**
     *  画公章名称（类型）
     *
     * @param {string} seal_type
     * @memberof SealGenerator
     */
    SealGenerator.prototype.drawSealType = function (seal_type) {
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'top';
        this.ctx.font = this.seal_type_font_size + "px Lucida Sans";
        // 测量文字长度,方便以后断行
        var width = this.ctx.measureText(seal_type).width;
        this.ctx.fillText(seal_type, this.centerPoint, this.centerPoint + this.starOutSideCircle + 8, width);
        this.ctx.closePath();
        this.ctx.restore();
    };
    /**
     * 绘制公司名称
     *
     * @param {string} company
     * @memberof SealGenerator
     */
    SealGenerator.prototype.drawCompanyName = function (company) {
        this.ctx.save();
        this.ctx.translate(this.centerPoint, this.centerPoint);
        this.ctx.font = '18px Lucida Sans';
        this.ctx.textBaseline = 'middle'; // 设置文本的垂直对齐方式
        this.ctx.textAlign = 'center'; // 设置文本的水平对对齐方式
        var length = company.length; // 字符串长度
        var c_arr = company.split('');
        var totalAngle = this.start_angle - this.end_angle; // 总角度
        var angle = (length === 1) ? 0 : totalAngle / (length - 1); // 每次旋转的角度
        var start_angle = 360 - this.start_angle - angle; // 实际起始角度
        this.ctx.rotate(start_angle * Math.PI / 180);
        for (var i = 0; i < length; i++) {
            this.ctx.rotate(angle * Math.PI / 180);
            this.ctx.save();
            this.ctx.beginPath();
            this.ctx.translate(this.centerPoint - 20, 0);
            this.ctx.rotate(Math.PI / 2);
            this.ctx.fillText(c_arr[i], 0, 0);
            this.ctx.closePath();
            this.ctx.restore();
        }
        this.ctx.restore();
    };
    /**
     * 画公章中间五角星
     *
     * @memberof SealGenerator
     */
    SealGenerator.prototype.drawStar = function () {
        this.ctx.save();
        this.ctx.beginPath();
        for (var i = 0; i < 5; i++) {
            var out_angle = ((18 + i * 72) / 180) * Math.PI;
            var inner_angle = ((54 + i * 72) / 180) * Math.PI;
            var out_x = Math.cos(out_angle) * this.starOutSideCircle + this.centerPoint;
            var out_y = -Math.sin(out_angle) * this.starOutSideCircle + this.centerPoint;
            var inner_x = Math.cos(inner_angle) * this.starInSideCircle + this.centerPoint;
            var inner_y = -Math.sin(inner_angle) * this.starInSideCircle + this.centerPoint;
            this.ctx.lineTo(out_x, out_y);
            this.ctx.lineTo(inner_x, inner_y);
        }
        this.ctx.fill();
        this.ctx.closePath();
        this.ctx.restore();
    };
    /**
     * 初始化配置项
     *
     * @param {(sealOptions | undefined)} options
     * @returns {sealOptions}
     * @memberof SealGenerator
     */
    SealGenerator.prototype.initOptions = function (options) {
        var default_options = {
            color: config.SEAL_COLOR,
            sealWidth: config.DEFAULT_SEAL_WIDTH
        };
        if (options) {
            default_options = Object.assign(default_options, options);
        }
        return default_options;
    };
    /**
     * 将当前canvas转换成data url
     *
     * @returns
     * @memberof SealGenerator
     */
    SealGenerator.prototype.toDataUrl = function () {
        return this.canvas.toDataURL();
    };
    SealGenerator.prototype.destory = function () {
        this.canvas.remove();
        this.dom = null;
    };
    return SealGenerator;
}());
export { SealGenerator };
