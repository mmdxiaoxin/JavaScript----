function throttle(fn, delay = 500) {
    let timer = null;

    return function (...args) {
        if (timer) return;
        timer = setTimeout(() => {
            timer = null;
            fn.apply(this, args);
        }, delay);
    };
}
