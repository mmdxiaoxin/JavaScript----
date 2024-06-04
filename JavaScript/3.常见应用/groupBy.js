const people = [
    { name: 'Alice', age: 30, sex: 'female' },
    { name: 'Bob', age: 35, sex: 'male' },
    { name: 'Cathy', age: 22, sex: 'female' },
    { name: 'David', age: 28, sex: 'male' },
    { name: 'Eve', age: 45, sex: 'female' },
    { name: 'Frank', age: 32, sex: 'male' },
    { name: 'Grace', age: 29, sex: 'female' },
    {
        name: 'Henry',
        age: 40,
        sex: 'male',
        address: {
            province: '广东',
            city: '深圳',
        },
    },
];
const nums = [1, 2, 3, 4, 5, 7, 8, 6, 9];

// 类似于按选项分组
// {
//     "30":[],
//     "35": []
// }

// 按年龄分组
// const result = [];
// for (const person of people) {
//     const key = person.age;
//     if (!result[key]) {
//         result[key] = [];
//     }
//     result[key].push(person);
// }
// console.log(result);

// /**
//  * 简单的分组函数
//  * @param {Array} arr
//  * @param {string} propName
//  * @return {Object}
//  */
// function groupBy(arr, propName) {
//     const result = {};
//     for (const person of arr) {
//         const key = person[propName];
//         if (!result[key]) {
//             result[key] = [];
//         }
//         result[key].push(person);
//     }
//     return result;
// }

/**
 * 高阶分组函数
 * @param {Array} arr
 * @param {function} generateKey
 * @returns
 */
function groupBy(arr, generateKey) {
    const result = {};
    for (const person of arr) {
        const key = generateKey(person);
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(person);
    }
    return result;
}

//按照年龄分组
const result1 = groupBy(people, (item) => item.age);
console.log(result1);

//按照性别和年龄分组
const result2 = groupBy(
    people,
    (item) => `${item.sex}-${item.age}`,
);
console.log(result2);

/**
 * 通用性扩展
 * @param {Array} arr
 * @param {string | function} generateKey
 * @returns
 */
function groupByEx(arr, generateKey) {
    if (typeof generateKey === 'string') {
        generateKey = (item) => item[generateKey];
    }
    const result = {};
    for (const person of arr) {
        const key = generateKey(person);
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(person);
    }
    return result;
}
