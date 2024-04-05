const generateRandomArray = require('./generateRandom');

const testArray = generateRandomArray(50, 1, 100);

/**
 *
 * @param {number[]} arr
 */
function insertSort(arr) {
    const len = arr.length;
    for (let i = 1; i < len; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
}

console.log('原始数据:', testArray);
insertSort(testArray);
console.log('排序数据:', testArray);
