//官方：https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise-resolve-functions
new Promise((resolve) => {
    let resolvedPromise = Promise.resolve();
    resolve(resolvedPromise);
}).then(() => {
    console.log('resolvePromise resolved');
});

Promise.resolve()
    .then(() => {
        console.log('promise1');
    })
    .then(() => {
        console.log('promise2');
    })
    .then(() => {
        console.log('promise3');
    });

/**
 * Promise.resolve().then(() => { console.log('resolvePromise resolved'); })
 * () => { console.log('promise2'); }
 * //console.log('promise1');
 */

/**
 * () => { console.log('resolvePromise resolved'); }
 * () => { console.log('promise3'); }
 * //console.log('promise2');
 */

/**
 * //console.log('resolvePromise resolved');
 * //console.log('promise3');
 */
