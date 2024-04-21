class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
        this.head = new Node();
        this.tail = new Node();
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
    get(key) {
        if (this.cache.has(key)) {
            const node = this.cache.get(key);
            this.moveToHead(node);
            return node.value;
        } else {
            return -1;
        }
    }
    put(key, value) {
        if (this.cache.has(key)) {
            const node = this.cache.get(key);
            node.value = value;
            this.moveToHead(node);
        } else {
            if (this.cache.size === this.capacity) {
                const tailPrev = this.tail.prev;
                this.removeNode(tailPrev);
                this.cache.delete(tailPrev.key);
            }
            const newNode = new Node(key, value);
            this.addToHead(newNode);
            this.cache.set(key, newNode);
        }
    }
    /**
     * 添加到首部
     * @param {Node} node
     */
    addToHead(node) {
        node.prev = this.head;
        node.next = this.head.next;
        this.head.next.prev = node;
        this.head.next = node;
    }
    /**
     * 删除节点
     * @param {Node} node
     */
    removeNode(node) {
        node.next.prev = node.prev;
        node.prev.next = node.next;
    }
    /**
     * 移到到首部
     * @param {Node} node
     */
    moveToHead(node) {
        this.removeNode(node);
        this.addToHead(node);
    }
}
