const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);

Promise.all([promise1, promise2, promise3])
    .then((values) => {
        console.log(values); // 输出: [1, 2, 3]
    })
    .catch((error) => {
        console.error(error);
    });

/**
 * 自定义Promise.all
 * @param {Iterable} proms
 */
Promise.myAll = function (proms) {
    let res, rej;
    const p = new Promise((resolve, reject) => {});

    let count = 0;
    const result = [];
    let i = 0;
    let fulfilledCount = 0;
    for (const prom of proms) {
        const index = i;
        i++;
        count++;
        Promise.resolve(prom).then((data) => {
            // 1. data -> result
            result[index] = data;
            // 2.完成最终的promise
            fulfilledCount++;
            if (fulfilledCount === count) {
                res(result);
            }
        }, rej);
    }
    if (count === 0) {
        res(result);
    }
    return p;
};
