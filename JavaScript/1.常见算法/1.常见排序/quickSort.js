const generateRandomArray = require('./generateRandom');

const testArray = generateRandomArray(50, 1, 100);

/**
 * 快速排序
 * @param {number[]} arr
 * @param {number} start
 * @param {number} end
 */
function quickSort(arr, start, end) {
    if (start >= end) {
        return;
    }
    const pivotIndex = Math.floor((start + end) / 2);
    const pivot = arr[pivotIndex];
    let low = start;
    let high = end;

    while (low <= high) {
        while (arr[low] < pivot) low++;
        while (arr[high] > pivot) high--;
        if (low <= high) {
            [arr[low], arr[high]] = [arr[high], arr[low]];
            low++;
            high--;
        }
    }

    quickSort(arr, start, high);
    quickSort(arr, low, end);
}

console.log('原始数据:', testArray);
quickSort(testArray, 0, testArray.length - 1);
console.log('排序数据:', testArray);
