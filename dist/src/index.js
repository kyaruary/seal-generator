import { SealGenerator } from "./sealGenerator";
var sg = new SealGenerator("canvas");
var img = document.querySelector('#img');
sg.draw('杭州链录科技有限公司', '专属章');
var imgUrl = sg.toDataUrl();
img.src = imgUrl;
