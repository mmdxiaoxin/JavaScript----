const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);

Promise.all([promise1, promise2, promise3])
    .then((values) => {
        console.log('all:', values); // 输出: [1, 2, 3]
    })
    .catch((error) => {
        console.error(error);
    });

/**
 * 自定义Promise.all
 * @param {Iterable} values
 */
Promise.myAll = function (values) {
    if (!Array.isArray(values)) {
        const type = typeof values;
        return new TypeError(
            `TypeError: ${type} ${values} is not iterable`,
        );
    }
    return new Promise((resolve, reject) => {
        const resultArr = [];
        let orderIndex = 0;
        const processResultByKey = (value, index) => {
            resultArr[index] = value;
            if (++orderIndex === values.length) {
                resolve(resultArr);
            }
        };
        for (let i = 0; i < values.length; i++) {
            let value = values[i];
            if (value && typeof value.then === 'function') {
                value.then((value) => {
                    processResultByKey(value, i);
                }, reject);
            } else {
                processResultByKey(value, i);
            }
        }
    });
};

/**
 * 自定义Promise.all
 * @param {Iterable} promises
 */
Promise.myAll1 = function (promises) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            const type = typeof promises;
            return new TypeError(
                `TypeError: ${type} ${promises} is not iterable`,
            );
        }
        let resolvedCounter = 0;
        const results = new Array(promises.length);

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then((value) => {
                    results[index] = value;
                    resolvedCounter += 1;

                    if (resolvedCounter === promises.length) {
                        resolve(results);
                    }
                })
                .catch((error) => {
                    reject(error);
                });
        });

        if (promises.length === 0) {
            resolve([]);
        }
    });
};

Promise.myAll([promise1, promise2, promise3])
    .then((values) => {
        console.log('myAll:', values); // 输出: [1, 2, 3]
    })
    .catch((error) => {
        console.error(error);
    });

Promise.myAll1([promise1, promise2, promise3])
    .then((values) => {
        console.log('myAll:', values); // 输出: [1, 2, 3]
    })
    .catch((error) => {
        console.error(error);
    });
