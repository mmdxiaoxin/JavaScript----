const generateRandomArray = require('./generateRandom');

const testArray = generateRandomArray(50, 1, 100);

/**
 *
 * @param {number[]} arr
 */
function bubbleSort(arr) {
    const len = arr.length;

    const swap = function (arr, leftIndex, rightIndex) {
        const temp = arr[leftIndex];
        arr[leftIndex] = arr[rightIndex];
        arr[rightIndex] = temp;
    };

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
}

console.log('原始数据:', testArray);
bubbleSort(testArray);
console.log('排序数据:', testArray);
