var obj = {
    //原数据，包含字符串、对象、函数、数组等不同的类型
    name: 'test',
    main: {
        a: 1,
        b: 2,
    },
    fn: function () {},
    friends: [1, 2, 3, [22, 33]],
};

//循环递归实现深拷贝
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
