const promise1 = new Promise((resolve) => setTimeout(resolve, 100, 'one'));
const promise2 = new Promise((resolve) => setTimeout(resolve, 200, 'two'));

Promise.race([promise1, promise2])
    .then((value) => {
        console.log(value); // 输出: 'one'，因为 promise1 先完成
    })
    .catch((error) => {
        console.error(error);
    });
