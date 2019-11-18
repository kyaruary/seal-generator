import { SealGenerator } from "./sealGenerator";
const sg = new SealGenerator("canvas");
const img = document.querySelector('#img') as HTMLImageElement;
sg.draw('杭州链录科技有限公司','专属章');
const imgUrl = sg.toDataUrl();
img.src = imgUrl;