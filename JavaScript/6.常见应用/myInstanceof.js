/**
 * instanceof模拟实现
 * @param {any} left
 * @param {any} right
 * @returns
 */
function myInstanceof(left, right) {
    const prototype = right.prototype;

    if (left === null || left === undefined) {
        return false;
    }

    let proto = Object.getPrototypeOf(left);

    while (proto) {
        if (proto === prototype) {
            return true;
        }
        proto = Object.getPrototypeOf(proto);
    }

    return false;
}
