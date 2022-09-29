/**
 * 仿知乎隐写水印
 * 参考 https://v2ex.com/t/877614 提供的信息
 * 由GitHub Copilot自动生成
 */

/**
 * svg内容如下
 * 
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 336 75" fill="#000" fill-opacity="0.005" width="336" height="75"
    font-size="15px">
    <text x="10" y="1.5em">这里是 UserHash</text>
    <text x="10" y="3em">这里是 UserID</text>
</svg>
 */

/**
 * css内容如下
 * 
.css-xxxxxx {
    position: fixed;
    top: 0px;
    width: 100%;
    height: 100%;
    background: url("data:image/svg+xml;base64,此处是 base64 编码的 svg 图片，已移除") space;
    pointer-events: none;
}
 * 其中xxxxxx为随机生成的字符串
 */


/**
 * 生成随机字符串
 * @param {Number} len 字符串长度
 * @returns {String} 随机字符串
 * @example
 * randomString(10) // "2f1d3f1d2f"
 */

 function randomString(len) {
    let str = "";
    for (let i = 0; i < len; i++) {
        str += Math.floor(Math.random() * 16).toString(16);
    }
    return str;
}

/**
 * 生成随机类名
 * @returns {String} 随机类名
 * @example
 * randomClassName() // ".css-2f1d3f1d2f"
 */

function randomClassName() {
    return "css-" + randomString(10);
}

/**
 * 生成svg
 * @param {String} userHash 用户hash
 * @param {String} userID 用户id
 * @returns {String} svg内容
 * @example
 * generateSVG("2f1d3f1d2f", "2f1d3f1d2f") // "<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 336 75" fill="#000" fill-opacity="0.005" width="336" height="75" font-size="15px"><text x="10" y="1.5em">2f1d3f1d2f</text><text x="10" y="3em">2f1d3f1d2f</text></svg>"
 */

function generateSVG(userHash, userID) {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 336 75" fill="#000" fill-opacity="0.005" width="336" height="75" font-size="15px"><text x="10" y="1.5em">${userHash}</text><text x="10" y="3em">${userID}</text></svg>`;
}

/**
 * 生成css
 * @param {String} className 类名
 * @param {String} svg svg内容
 * @returns {String} css内容
 * @example
 * generateCSS(".css-2f1d3f1d2f", "<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 336 75" fill="#000" fill-opacity="0.005" width="336" height="75" font-size="15px"><text x="10" y="1.5em">2f1d3f1d2f</text><text x="10" y="3em">2f1d3f1d2f</text></svg>") // ".css-2f1d3f1d2f { position: fixed; top: 0px; width: 100%; height: 100%; background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMzYgNzUiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMDUiIHdpZHRoPSIzMzYiIGhlaWdodD0iNzUiIGZvbnQtc2l6ZT0iMTVweCI+PHRleHQgeD0iMTAiIHk9IjEuNWVtIj4yZjFkM2YxZDJmPC90ZXh0Pjx0ZXh0IHg9IjEwIiB5PSIzZW0iPjJmMWQzZjFkMmY8L3RleHQ+PC9zdmc+") space; pointer-events: none; }"
 */

function generateCSS(className, svg) {
    return `.${className} { position: fixed; top: 0px; width: 100%; height: 100%; background: url("data:image/svg+xml;base64,${btoa(svg)}") space; pointer-events: none; }`;
}

/**
 * 生成隐写水印
 * @param {String} userHash 用户hash
 * @param {String} userID 用户id
 * @returns {String} 随机类名
 * @example
 * generateWatermark("2f1d3f1d2f", "2f1d3f1d2f") // ".css-2f1d3f1d2f"
 */

function generateWatermark(userHash, userID) {
    const className = randomClassName();
    const svg = generateSVG(userHash, userID);
    const css = generateCSS(className, svg);
    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
    return className;
}

/**
 * 插入div
 * @param {String} className 随机类名
 * @returns {String} 随机类名
 * @example
 * insertDiv("css-2f1d3f1d2f") // "css-2f1d3f1d2f"
 */

function insertDiv(className) {
    const div = document.querySelector(className);
    if (div) {
        return false;
    }
    const newDiv = document.createElement("div");
    newDiv.className = className;
    document.body.appendChild(newDiv);
    return className;
}

/**
 * 插入水印
 * @param {String} userHash 用户hash
 * @param {String} userID 用户id
 * @returns {String} 随机类名
 * @example
 * insertWatermark("2f1d3f1d2f", "2f1d3f1d2f") // "css-2f1d3f1d2f"
 */

function insertWatermark(userHash, userID) {
    const className = generateWatermark(userHash, userID);
    return insertDiv(className);
}
