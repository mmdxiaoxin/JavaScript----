/**
 * 生成器函数：斐波那契数列
 * @param {number} limit
 */
function* fibonacciGenerator(limit) {
    let [prev, curr] = [0, 1];
    while (curr <= limit) {
        yield curr;
        [prev, curr] = [curr, prev + curr];
    }
}

// 使用生成器
const fibGen = fibonacciGenerator(100);

for (const num of fibGen) {
    console.log(num); // 输出斐波那契数列，直到100
}

/**
 * 生成器函数：范围内的偶数
 * @param {number} start
 * @param {number} end
 */
function* evenNumbersGenerator(start, end) {
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            yield i;
        }
    }
}

// 使用生成器
const evenGen = evenNumbersGenerator(1, 10);

for (const num of evenGen) {
    console.log(num); // 输出：2, 4, 6, 8, 10
}
