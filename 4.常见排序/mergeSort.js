const generateRandomArray = require('./generateRandom');

const testArray = generateRandomArray(50, 1, 100);

/**
 * 合并
 * @param {number[]} arr
 * @param {number} ll
 * @param {number} lr
 * @param {number} rl
 * @param {number} rr
 */
function merge(arr, ll, lr, rl, rr) {
    const low = ll,
        high = rr;
    const result = [];
    let k = 0;
    while (ll <= lr && rl <= rr) {
        if (arr[ll] < arr[rl]) {
            result.push(arr[ll++]);
        } else {
            result.push(arr[rl++]);
        }
    }
    while (ll <= lr) result.push(arr[ll++]);
    while (rl <= rr) result.push(arr[rl++]);
    for (let i = low; i <= high; i++) {
        arr[i] = result[k++];
    }
}

/**
 * 归并排序
 * @param {number[]} arr
 * @param {number} start
 * @param {number} end
 */
function mergeSort(arr, start, end) {
    if (start == end) return;
    const mid = Math.floor((start + end) / 2);
    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end);
    merge(arr, start, mid, mid + 1, end);
}

console.log('原始数据:', testArray);
mergeSort(testArray, 0, testArray.length - 1);
console.log('排序数据:', testArray);
