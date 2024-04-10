let obj = {
    url: '/api/list',
    method: 'GET',
    cache: false,
    timeout: 1000,
    key: Symbol('KEY'),
    big: 10n,
    n: null,
    u: undefined,
    headers: {
        'Content-Type': 'application/json',
        post: {
            'X-Token': 'xxx',
        },
    },
    arr: [10, 20, 30],
    reg: /^\d+$/,
    time: new Date(),
    fn: function () {
        console.log(this);
    },
};

/**
 * 循环递归实现深拷贝
 * @param {object} obj
 * @param {WeakMap} hash
 * @returns {object}
 */
function deepCopy(obj, hash = new WeakMap()) {
    if (obj === null) return obj;
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof RegExp) return new RegExp(obj);
    if (typeof obj != 'object') return obj;

    //是对象则进行深拷贝
    if (hash.get(obj)) return hash.get(obj);
    let cloneObj = new obj.constructor();
    hash.set(obj, cloneObj);
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloneObj[key] = deepCopy(obj[key], hash);
        }
    }
    return cloneObj;
}

const testObj = deepCopy(obj);
testObj.name = 'testObj';

console.log('obj', obj);
console.log('copy', testObj);
