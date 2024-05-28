const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class Promise {
    constructor(executor) {
        this.status = PENDING;
        this.value = undefined;
        this.reason = undefined;
        this.onResolvedCallbacks = [];
        this.onRejectedCallbacks = [];

        let resolve = (value) => {
            if (this.status === PENDING) {
                this.status = FULFILLED;
                this.value = value;
                this.onResolvedCallbacks.forEach((func) =>
                    func(),
                );
            }
        };

        let reject = (reason) => {
            if (this.status === PENDING) {
                this.status = REJECTED;
                this.value = this.value;
                this.onRejectedCallbacks.forEach((func) =>
                    func(),
                );
            }
        };

        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }

    then(onFulfilled, onRejected) {
        if (this.status === FULFILLED) {
            onFulfilled(this.value);
        }

        if (this.status === REJECTED) {
            onRejected(this.reason);
        }

        if (this.status === PENDING) {
            this.onResolvedCallbacks.push(() =>
                onFulfilled(this.value),
            );
            this.onRejectedCallbacks.push(() =>
                onRejected(this.value),
            );
        }
    }

    static all(promiseArr) {}

    static race(promiseArr) {}
}
