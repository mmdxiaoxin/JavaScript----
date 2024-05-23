function Parent(name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

Parent.prototype.getName = function () {
    console.log(this.name);
};

function Child(name, age) {
    Parent.call(this, name);
    this.age = age;
}

// 封装创建新的对象的方法，以传入的原型作为新对象的原型
function createObj(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

function createPrototype(child, parent) {
    let prototype = createObj(parent.prototype);
    prototype.constructor = child;
    child.prototype = prototype;
}

createPrototype(Child, Parent);

let child1 = new Child('kevin', '18');

child1.colors.push('black');

console.log(child1.name); // kevin
console.log(child1.age); // 18
console.log(child1.colors); // ["red", "blue", "green", "black"]

let child2 = new Child('daisy', '20');

console.log(child2.name); // daisy
console.log(child2.age); // 20
console.log(child2.colors); // ["red", "blue", "green"]

/**
 * 这种方式的高效率体现它只调用了一次 Parent 构造函数，
 * 并且因此避免了在 Parent.prototype 上面创建不必要的
 * 、多余的属性。与此同时，原型链还能保持不变；因此，还能
 * 够正常使用 instanceof 和 isPrototypeOf。开发人员普
 * 遍认为寄生组合式继承是引用类型最理想的继承范式。
 */
