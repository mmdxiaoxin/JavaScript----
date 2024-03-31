const testArr = [1, [2, [3, [4, 5]]], 6];

const newArr = (arr) => {
    return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? newArr(cur) : cur);
    }, []);
};

console.log(newArr(testArr));
