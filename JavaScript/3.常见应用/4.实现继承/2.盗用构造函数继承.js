function Parent() {
    this.names = ['kevin', 'daisy'];
}

function Child() {
    Parent.call(this);
}

let child1 = new Child();

child1.names.push('Lucy');

console.log(child1.names); // ["kevin", "daisy", "Lucy"]

let child2 = new Child();

console.log(child2.names); // ["kevin", "daisy"]

/**
 * 优点：
 * 解决了原型链继承存在的两个缺点。
 */

/**
 * 缺点：
 * 方法都在构造函数中定义，每次创建实例都会创建一遍方法。
 */
