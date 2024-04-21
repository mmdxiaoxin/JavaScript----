const generateRandomArray = require('./generateRandom');

const testArray = generateRandomArray(50, 1, 100);

/**
 *
 * @param {number[]} arr
 */
function selectSort(arr) {
    const len = arr.length;

    const swap = function (arr, leftIndex, rightIndex) {
        const temp = arr[leftIndex];
        arr[leftIndex] = arr[rightIndex];
        arr[rightIndex] = temp;
    };

    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[i]) {
                swap(arr, i, j);
            }
        }
    }
}

console.log('原始数据:', testArray);
selectSort(testArray);
console.log('排序数据:', testArray);
