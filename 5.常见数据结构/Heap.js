class Heap {
    constructor(compareFn) {
        this.heap = [];
        this.compare = compareFn || ((a, b) => a - b);
    }

    get size() {
        return this.heap.length;
    }

    shiftUp(index) {
        const parent = Math.ceil(index / 2) - 1;
        if (parent >= 0 && this.compare(this.heap[index], this.heap[parent]) > 0) {
            [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
            return parent;
        }
        return -1;
    }

    shiftDown(index) {
        const leftChild = Math.floor(index * 2) + 1;
        const rightChild = leftChild + 1;
        let largest = index;
        if (leftChild < this.size && this.compare(this.heap[leftChild], this.heap[largest]) > 0)
            largest = leftChild;
        if (rightChild < this.size && this.compare(this.heap[rightChild], this.heap[largest]) > 0)
            largest = rightChild;
        if (largest !== index) {
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            this.shiftDown(largest);
        }
        return largest;
    }

    peek() {
        if (this.size === 0) return null;
        return this.heap[0];
    }

    insert(value) {
        this.heap.push(value);
        let index = this.size - 1;
        while (index != -1) {
            index = this.shiftUp(index);
        }
    }

    extract() {
        if (this.size === 0) return null;
        if (this.size === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.shiftDown(0);
        return root;
    }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    const minHeap = new Heap((a, b) => b - a);
    for (const num of nums) {
        minHeap.insert(num);
        if (minHeap.size > k) {
            minHeap.extract(); // 保持堆的大小为 k
        }
    }
    return minHeap.peek();
};

// 测试第k大
const nums = [3, 2, 1, 5, 6, 4];
const k = 2;
console.log(findKthLargest(nums, k)); // 输出：5
