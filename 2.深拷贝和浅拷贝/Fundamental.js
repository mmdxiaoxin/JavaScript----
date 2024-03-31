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

//判断数据类型是否是复杂类型，如果是则调用自己，再次循环，如果不是，直接赋值即可
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
