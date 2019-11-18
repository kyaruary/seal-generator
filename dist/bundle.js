/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"config\", function() { return config; });\nvar config = {\n    DEFAULT_COMPANY_NAME: '杭州链录科技有限公司',\n    DEFAULT_SEAL_TYPE: '检测专用章',\n    SEAL_COLOR: 'red',\n    DEFAULT_SEAL_WIDTH: 200,\n    SEAL_TYPE_MAX_LENGTH: 110,\n    DEFAUTL_FONT_SIZE: 17,\n    START_ANGLE: 210,\n    END_ANGLE: -30\n};\n\n\n//# sourceURL=webpack:///./src/config.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sealGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sealGenerator */ \"./src/sealGenerator.ts\");\n\nvar sg = new _sealGenerator__WEBPACK_IMPORTED_MODULE_0__[\"SealGenerator\"](\"canvas\");\nvar img = document.querySelector('#img');\nsg.draw('杭州链录科技有限公司', '专属章');\nvar imgUrl = sg.toDataUrl();\nimg.src = imgUrl;\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/sealGenerator.ts":
/*!******************************!*\
  !*** ./src/sealGenerator.ts ***!
  \******************************/
/*! exports provided: SealGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SealGenerator\", function() { return SealGenerator; });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/config.ts\");\n\nvar SealGenerator = /** @class */ (function () {\n    function SealGenerator(id, options) {\n        this.start_angle = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].START_ANGLE;\n        this.end_angle = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].END_ANGLE;\n        this.DEFAULT_COMPANY_NAME = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].DEFAULT_COMPANY_NAME; // 默认公司名称\n        this.DEFAULT_SEAL_TYPE = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].DEFAULT_SEAL_TYPE; // 默认公章类型\n        this.seal_type_font_size = _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].DEFAUTL_FONT_SIZE; // 默认公章类型文字大小\n        // 根据寻找dom，如果没有抛出错误警告。\n        this.dom = document.getElementById(id);\n        if (!this.dom) {\n            throw \"can not find any dom by id:\" + id;\n        }\n        // 如果不是canvas节点那么将非块级元素转化为块级元素并创建插入canvas节点\n        if (this.dom instanceof HTMLCanvasElement) {\n            this.canvas = this.dom;\n        }\n        else {\n            this.dom.style.display = this.dom.style.display === \"inline\" ? \"block\" : this.dom.style.display;\n            this.canvas = document.createElement(\"canvas\");\n            this.dom.append(this.canvas);\n        }\n        // 初始化配置项，没有配置参数则使用默认项\n        this.options = this.initOptions(options);\n        this.centerPoint = Math.floor(this.options.sealWidth / 2);\n        this.lineWidth = Math.floor(this.options.sealWidth / 40);\n        // 五角星大小为公章的1/5\n        this.starOutSideCircle = this.options.sealWidth / 5;\n        this.starInSideCircle = this.starOutSideCircle / 2.61803;\n        // 设定canvas宽高和ctx属性\n        this.canvas.height = this.options.sealWidth;\n        this.canvas.width = this.options.sealWidth;\n        this.ctx = this.canvas.getContext(\"2d\");\n        this.ctx.lineWidth = this.lineWidth;\n        this.ctx.strokeStyle = this.options.color;\n        this.ctx.fillStyle = this.options.color;\n        // 初始化公章外圈和五角星\n        this.draw(this.DEFAULT_COMPANY_NAME, this.DEFAULT_SEAL_TYPE);\n    }\n    /**\n     * 绘制公章整体\n     * @param {string} company_name\n     * @param {string} seal_type\n     * @memberof SealGenerator\n     */\n    SealGenerator.prototype.draw = function (company_name, seal_type) {\n        this.ctx.clearRect(0, 0, this.options.sealWidth, this.options.sealWidth);\n        this.drawCircle();\n        this.drawStar();\n        this.drawSealType(seal_type);\n        this.drawCompanyName(company_name);\n    };\n    /**\n     * 画公章外围圈\n     * @memberof SealGenerator\n     */\n    SealGenerator.prototype.drawCircle = function () {\n        this.ctx.beginPath();\n        this.ctx.arc(this.centerPoint, this.centerPoint, this.centerPoint - this.lineWidth, 0, Math.PI * 2, false);\n        this.ctx.stroke();\n        this.ctx.closePath();\n    };\n    /**\n     *  画公章名称（类型）\n     *\n     * @param {string} seal_type\n     * @memberof SealGenerator\n     */\n    SealGenerator.prototype.drawSealType = function (seal_type) {\n        this.ctx.save();\n        this.ctx.beginPath();\n        this.ctx.textAlign = 'center';\n        this.ctx.textBaseline = 'top';\n        this.ctx.font = this.seal_type_font_size + \"px Lucida Sans\";\n        // 测量文字长度,方便以后断行\n        var width = this.ctx.measureText(seal_type).width;\n        this.ctx.fillText(seal_type, this.centerPoint, this.centerPoint + this.starOutSideCircle + 8, width);\n        this.ctx.closePath();\n        this.ctx.restore();\n    };\n    /**\n     * 绘制公司名称\n     *\n     * @param {string} company\n     * @memberof SealGenerator\n     */\n    SealGenerator.prototype.drawCompanyName = function (company) {\n        this.ctx.save();\n        this.ctx.translate(this.centerPoint, this.centerPoint);\n        this.ctx.font = '18px Lucida Sans';\n        this.ctx.textBaseline = 'middle'; // 设置文本的垂直对齐方式\n        this.ctx.textAlign = 'center'; // 设置文本的水平对对齐方式\n        var length = company.length; // 字符串长度\n        var c_arr = company.split('');\n        var totalAngle = this.start_angle - this.end_angle; // 总角度\n        var angle = (length === 1) ? 0 : totalAngle / (length - 1); // 每次旋转的角度\n        var start_angle = 360 - this.start_angle - angle; // 实际起始角度\n        this.ctx.rotate(start_angle * Math.PI / 180);\n        for (var i = 0; i < length; i++) {\n            this.ctx.rotate(angle * Math.PI / 180);\n            this.ctx.save();\n            this.ctx.beginPath();\n            this.ctx.translate(this.centerPoint - 20, 0);\n            this.ctx.rotate(Math.PI / 2);\n            this.ctx.fillText(c_arr[i], 0, 0);\n            this.ctx.closePath();\n            this.ctx.restore();\n        }\n        this.ctx.restore();\n    };\n    /**\n     * 画公章中间五角星\n     *\n     * @memberof SealGenerator\n     */\n    SealGenerator.prototype.drawStar = function () {\n        this.ctx.save();\n        this.ctx.beginPath();\n        for (var i = 0; i < 5; i++) {\n            var out_angle = ((18 + i * 72) / 180) * Math.PI;\n            var inner_angle = ((54 + i * 72) / 180) * Math.PI;\n            var out_x = Math.cos(out_angle) * this.starOutSideCircle + this.centerPoint;\n            var out_y = -Math.sin(out_angle) * this.starOutSideCircle + this.centerPoint;\n            var inner_x = Math.cos(inner_angle) * this.starInSideCircle + this.centerPoint;\n            var inner_y = -Math.sin(inner_angle) * this.starInSideCircle + this.centerPoint;\n            this.ctx.lineTo(out_x, out_y);\n            this.ctx.lineTo(inner_x, inner_y);\n        }\n        this.ctx.fill();\n        this.ctx.closePath();\n        this.ctx.restore();\n    };\n    /**\n     * 初始化配置项\n     *\n     * @param {(sealOptions | undefined)} options\n     * @returns {sealOptions}\n     * @memberof SealGenerator\n     */\n    SealGenerator.prototype.initOptions = function (options) {\n        var default_options = {\n            color: _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].SEAL_COLOR,\n            sealWidth: _config__WEBPACK_IMPORTED_MODULE_0__[\"config\"].DEFAULT_SEAL_WIDTH\n        };\n        if (options) {\n            default_options = Object.assign(default_options, options);\n        }\n        return default_options;\n    };\n    /**\n     * 将当前canvas转换成data url\n     *\n     * @returns\n     * @memberof SealGenerator\n     */\n    SealGenerator.prototype.toDataUrl = function () {\n        return this.canvas.toDataURL();\n    };\n    SealGenerator.prototype.destory = function () {\n        this.canvas.remove();\n        this.dom = null;\n    };\n    return SealGenerator;\n}());\n\n\n\n//# sourceURL=webpack:///./src/sealGenerator.ts?");

/***/ })

/******/ });