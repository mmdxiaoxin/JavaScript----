Promise.resolve()
    .then(() => {
        console.log(0);
        return Promise.resolve(4);
    })
    .then((res) => {
        console.log(res);
    });

Promise.resolve()
    .then(() => {
        console.log(1);
    })
    .then(() => {
        console.log(2);
    })
    .then(() => {
        console.log(3);
    })
    .then(() => {
        console.log(5);
    })
    .then(() => {
        console.log(6);
    });

/**
 * Promise.resolve(4).then((res) => { console.log(res);} );
 * () => { console.log(2); }
 * //console.log(0);
 * //console.log(1);
 */

/**
 * () => { console.log(3); }
 * (res = 4) => { console.log(res = 4);
 * //console.log(2);
 */

/**
 * () => { console.log(5); }
 * //console.log(3);
 * //console.log(4);
 */

/**
 * 略
 */
