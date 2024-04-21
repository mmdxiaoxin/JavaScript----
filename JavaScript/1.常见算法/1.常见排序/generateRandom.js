/**
 * 生成随机整数
 * @param {number} min 最小值
 * @param {number} max 最大值
 * @returns {number} 生成的随机整数
 */
function generateRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * 生成指定长度的随机数组
 * @param {number} length 数组长度
 * @param {number} min 最小值
 * @param {number} max 最大值
 * @returns {number[]} 生成的随机数组
 */
function generateRandomArray(length, min, max) {
    let randomArray = [];
    for (let i = 0; i < length; i++) {
        randomArray.push(generateRandomInteger(min, max));
    }
    return randomArray;
}

// 输出测试数组
module.exports = generateRandomArray;
