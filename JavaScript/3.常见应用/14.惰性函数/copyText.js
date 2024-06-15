// function copyText(text) {
//     if (navigator.clipboard) {
//         navigator.clipboard.writeText(text);
//     } else {
//         const input = document.createElement('input');
//         input.setAttribute('value', text);
//         document.body.appendChild(input);
//         input.select();
//         document.execCommand('copy');
//         document.body.removeChild(input);
//     }
// }

/**
 * 复制文本
 * @param {string} text
 * @description 该函数用于复制文本到剪贴板，使用惰性函数实现
 * @returns
 */
function copyText(text) {
    if (navigator.clipboard) {
        copyText = function (text) {
            navigator.clipboard.writeText(text);
        };
    } else {
        copyText = function (text) {
            const input = document.createElement('input');
            input.setAttribute('value', text);
            document.body.appendChild(input);
            input.select();
            document.execCommand('copy');
            document.body.removeChild(input);
        };
    }
    copyText(text);
}
