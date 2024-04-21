/**
 * 函数柯里化是指将使用多个参数的函数转化成一系列使用一个参数的函数的技术,
 * 它返回一个新的函数, 这个新函数去处理剩余的参数
 */

//递归实现
function curry(fn, arity = fn.length) {
    return function curried(...args) {
        if (args.length >= arity) {
            return fn(...args);
        } else {
            return function (...nextArgs) {
                return curried(...args.concat(nextArgs));
            };
        }
    };
}

//闭包实现
function curryEx(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        } else {
            return function (...nextArgs) {
                return curried(...args.concat(nextArgs));
            };
        }
    };
}
