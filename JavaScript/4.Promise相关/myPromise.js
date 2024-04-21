class MyPromise {
    constructor(fn) {
        this.state = 'pending';

        this.successFn = [];

        this.failFn = [];

        let resolve = (val) => {
            if (this.state !== 'pending') return;

            this.state = 'success';
        };

        let reject = (err) => {};
    }

    then(resolveCallback, rejectCallback) {}

    static all(promiseArr) {}

    static race(promiseArr) {}
}
