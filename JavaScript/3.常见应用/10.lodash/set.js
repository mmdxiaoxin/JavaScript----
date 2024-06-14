/**
 * lodash.set
 * @param {object} object
 * @param {string} path
 * @param {any} value
 */
function set(object, path, value) {
    const keys = path.split('.');
    let current = object;

    for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];
        if (!(key in current)) {
            current[key] = {};
        }
        current = current[key];
    }
    current[keys[keys.length - 1]] = value;
}

// test
const object = {};
set(object, 'a.b.c', 1);
console.log(object); // { a: { b: { c: 1 } } }
