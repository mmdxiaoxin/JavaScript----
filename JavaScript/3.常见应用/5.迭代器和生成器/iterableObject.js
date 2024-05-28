const a = 1,
    b = 2,
    c = 3,
    d = 4,
    e = 5;

const iterableObject = {
    a,
    b,
    c,
    d,
    e,
    [Symbol.iterator]() {
        const entries = Object.entries(this);
        let index = 0;

        return {
            next() {
                if (index < entries.length) {
                    const [key, value] = entries[index++];
                    return { value: [key, value], done: false };
                } else {
                    return { value: undefined, done: true };
                }
            },
        };
    },
};

for (const [key, value] of iterableObject) {
    console.log(`${key}: ${value}`); // 输出：a: 1, b: 2, c: 3, d: 4, e: 5
}
