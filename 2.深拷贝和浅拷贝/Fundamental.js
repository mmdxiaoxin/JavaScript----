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
 * 判断数据类型是否是复杂类型，如果是则调用自己，再次循环，如果不是，直接赋值即可
 * @param {object} obj
 * @returns
 */
function copy(obj) {
    let newObj = null;
    if (typeof obj === 'object' && obj != null) {
        newObj = obj instanceof Array ? [] : {};
        for (const i in obj) {
            newObj[i] = copy(obj[i]);
        }
    } else {
        newObj = obj;
    }
    return newObj;
}

console.log(copy(obj));
