/**
 * 数组去重（包括特殊元素）
 * @param {Array} arr
 * @returns
 */
function duplicateRemoval(arr) {
    const result = [];
    const set = new Set();

    arr.forEach((item) => {
        if (typeof item === 'object') {
            let str = JSON.stringify(item);
            if (!set.has(str)) {
                set.add(str);
                result.push(item);
            }
        } else {
            if (!set.has(item)) {
                set.add(item);
                result.push(item);
            }
        }
    });

    return result;
}
