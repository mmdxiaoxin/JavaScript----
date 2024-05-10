let obj11 = {
    name: 'Alice',
    age: 30,
    details: { city: 'New York', hobby: 'Reading' },
};
let obj21 = {
    name: 'Alice',
    age: 31,
    details: { city: 'San Francisco', job: 'Engineer' },
};

/**
 * 对比对象的不同
 * @param {object} obj1
 * @param {object} obj2
 * @param {string} path
 * @returns {string[]}
 */
function deepDiff(obj1, obj2, path = '') {
    const diffs = [];

    for (const key in obj1) {
        const currentPath = (path ? `${path}.` : '') + key;

        if (!obj2.hasOwnProperty(key)) {
            diffs.push(currentPath);
        } else {
            if (
                typeof obj1[key] === 'object' &&
                typeof obj2[key] === 'object'
            ) {
                diffs.push(
                    ...deepDiff(
                        obj1[key],
                        obj2[key],
                        currentPath,
                    ),
                );
            } else {
                if (obj1[key] !== obj2[key]) {
                    diffs.push(currentPath);
                }
            }
        }
    }

    for (const key in obj2) {
        const currentPath = (path ? `${path}.` : '') + key;
        if (!obj1.hasOwnProperty(key)) {
            diffs.push(currentPath);
        }
    }

    return diffs;
}

console.log(deepDiff(obj11, obj21));
