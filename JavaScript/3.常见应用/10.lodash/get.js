/**
 * lodash.get
 * @param {object} object
 * @param {string} path
 * @param {any} defaultValue
 * @return {any | undefined}
 */
function get(object, path, defaultValue = undefined) {
    const keys = path.split('.');
    let current = object;

    for (const key of keys) {
        if (typeof current !== 'object' || !(key in current)) {
            return defaultValue;
        }
        current = current[key];
    }

    return current;
}

// test
const object = { a: { b: { c: 1 } } };
console.log(get(object, 'a.b.c')); // 1
console.log(get(object, 'a.b.c.d')); // undefined
