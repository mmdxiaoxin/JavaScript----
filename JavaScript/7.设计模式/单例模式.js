function singleton(className) {
    let instance;
    let parameters;
    return new Proxy(className, {
        construct(target, ...args) {
            if (!instance) {
                instance = Reflect.construct(target, ...args);
                parameters = args;
            }
            if (!isSame(parameters, args)) {
                throw new Error('Cannot create instance');
            }
            return instance;
        },
    });
}

function isSame(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
}

class MyClass {
    constructor(name) {
        this.name = name;
    }
}

const SingletonMyClass = singleton(MyClass);

const instance1 = new SingletonMyClass('Instance1');
console.log(instance1.name); // Output: Instance1

const instance2 = new SingletonMyClass('Instance1');
console.log(instance1 === instance2); // Output: true

try {
    const instance3 = new SingletonMyClass('Instance2');
} catch (error) {
    console.error(error.message); // Output: Cannot create instance
}
