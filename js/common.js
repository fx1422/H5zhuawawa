/**
 * 判断微信环境
 * @returns {boolean}
 */

function isWeiXin() {
    const ua = window.navigator.userAgent.toLowerCase();
    return ua.match(/MicroMessenger/i) == 'micromessenger'
}
/**
 * blob转base64
 * @param blob
 * @param callback
 */
function blobToDataURL(blob, callback) {
    const a = new FileReader();
    a.onload = function (e) {
        callback(e.target.result);
    };
    a.readAsDataURL(blob);
}


