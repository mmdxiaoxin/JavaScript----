// Description: 消除异步传染性，使函数功能不变，但是不再传染异步性
// 通过改动环境来消除异步传染性

// async function getUser() {
//     return await fetch(
//         './1.json',
//     );
// }

// async function m1() {
//     const user = await getUser();
//     // other works
//     return user;
// }

// async function m2() {
//     const user = await m1();
//     // other works
//     return user;
// }

// async function m3() {
//     const user = await m2();
//     // other works
//     return user;
// }

// async function main() {
//     const user = await m3();
//     console.log(user);
// }

function getUser() {
    return fetch('./1.json');
}

function m1() {
    const user = getUser();
    // other works
    return user;
}

function m2() {
    const user = m1();
    // other works
    return user;
}

function m3() {
    const user = m2();
    // other works
    return user;
}

function main() {
    console.log('main'); // 可以看到执行两次main
    const user = m3();
    console.log(user);
}

function run(func) {
    // 改动环境来消除异步传染性
    let cache = {
        status: 'pending',
        value: null,
    };
    const oldFetch = window.fetch;
    window.fetch = function (...args) {
        if (cache.status === 'fulfilled') {
            return cache.value;
        } else if (cache.status === 'rejected') {
            throw cache.value;
        }
        // 1.发送真实请求
        const prom = oldFetch(...args)
            .then((res) => {
                cache.status = 'fulfilled';
                cache.value = res;
            })
            .catch((err) => {
                cache.status = 'rejected';
                cache.value = err;
            });
        // 2.抛出一个Promise，以便在外部捕获
        throw prom;
    };

    // 执行入口函数
    try {
        func();
    } catch (error) {
        if (error instanceof Promise) {
            error.then(func, func).finally(() => {
                window.fetch = oldFetch;
            });
        }
    }
}

run(main);
