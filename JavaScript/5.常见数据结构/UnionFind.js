class UnionFind {
    constructor(size) {
        this.ids = new Array(size).fill(0).map((_, i) => i);
        this.ranks = new Array(size).fill(0);
        this.counts = new Array(size).fill(1);
    }
    /**
     * 查找父节点
     * @param {number} x
     * @returns {number}
     */
    find(x) {
        if (this.ids[x] !== x) {
            this.ids[x] = this.find(this.ids[x]);
        }
        return this.ids[x];
    }
    /**
     * 合并集合
     * @param {number} x
     * @param {number} y
     * @returns
     */
    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);

        if (rootX === rootY) {
            return;
        }

        if (this.ranks[rootX] < this.ranks[rootY]) {
            this.ids[rootX] = rootY;
            this.counts[rootY] += this.counts[rootX];
        } else if (this.ranks[rootX] > this.ranks[rootY]) {
            this.ids[rootY] = rootX;
            this.counts[rootX] += this.counts[rootY];
        } else {
            this.ids[rootY] = rootX;
            this.ranks[rootX]++;
            this.counts[rootX] += this.counts[rootY];
        }
    }
    /**
     * 返回集合大小
     * @param {number} x
     * @returns {number}
     */
    countInSet(x) {
        return this.counts[this.find(x)];
    }
}
