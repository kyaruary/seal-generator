!function(t){var i={};function n(o){if(i[o])return i[o].exports;var e=i[o]={i:o,l:!1,exports:{}};return t[o].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=i,n.d=function(t,i,o){n.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,i){if(1&i&&(t=n(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var e in t)n.d(o,e,function(i){return t[i]}.bind(null,e));return o},n.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(i,"a",i),i},n.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},n.p="",n(n.s=0)}([function(t,i,n){"use strict";n.r(i);var o=function(t){var i=t.color,n=void 0===i?"red":i,o=t.lineWidth,e=void 0===o?7:o,s=t.canvasWidth,a=void 0===s?200:s;this.color=n,this.lineWidth=e,this.canvasWidth=a,this.center_point=this.canvasWidth/2,this.starOutline=Math.floor(this.canvasWidth/4),this.starInnerline=this.starOutline/2};new(function(){function t(t,i){if(this.initialized=!1,this.DEFAULT_COMPANY_NAME="公司名字",this.DEFAULT_SEAL_TYPE="公章名",this.dom=document.getElementById(t),!this.dom)throw"can not find this dom via id";this.dom instanceof HTMLCanvasElement?this.canvas=this.dom:(this.dom.style.display="inline"===this.dom.style.display?"block":this.dom.style.display,this.canvas=document.createElement("canvas"),this.dom.append(this.canvas)),!i&&(i=new o({})),this.options=i,this.canvas.height=this.options.canvasWidth,this.canvas.width=this.options.canvasWidth,this.ctx=this.canvas.getContext("2d"),this.ctx.lineWidth=this.options.lineWidth,this.ctx.strokeStyle=this.options.color,this.ctx.fillStyle=this.options.color,this.draw(this.DEFAULT_COMPANY_NAME,this.DEFAULT_SEAL_TYPE),this.initialized=!0}return t.prototype.draw=function(t,i){this.initialized?this.ctx.restore():(this.ctx.clearRect(0,0,this.options.canvasWidth,this.options.canvasWidth),this.drawCircle(),this.drawStar(),this.ctx.save()),this.drawSealType(i),this.drawCompanyName(t)},t.prototype.drawCircle=function(){this.ctx.beginPath(),this.ctx.arc(this.options.center_point,this.options.center_point,this.options.center_point-this.options.lineWidth,0,2*Math.PI,!1),this.ctx.stroke(),this.ctx.closePath()},t.prototype.drawSealType=function(t){},t.prototype.drawCompanyName=function(t){},t.prototype.drawStar=function(){this.ctx.beginPath();for(var t=0;t<5;t++){var i=Math.cos((18+72*t)/180*Math.PI)*this.options.starOutline+this.options.center_point,n=-Math.sin((18+72*t)/180*Math.PI)*this.options.starOutline+this.options.center_point,o=Math.cos((54+72*t)/180*Math.PI)*this.options.starInnerline+this.options.center_point,e=-Math.sin((54+72*t)/180*Math.PI)*this.options.starInnerline+this.options.center_point;this.ctx.lineTo(i,n),this.ctx.lineTo(o,e)}console.log(this.options),this.ctx.fill(),this.ctx.closePath()},t}())("canvas")}]);