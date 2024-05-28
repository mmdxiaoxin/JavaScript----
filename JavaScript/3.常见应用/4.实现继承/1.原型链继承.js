function Parent() {
    this.name = 'kevin';
}

Parent.prototype.getName = function () {
    console.log(this.name);
    return this.name;
};

function Child() {}

Child.prototype = new Parent(); //继承

let child1 = new Child();

console.log(child1.getName()); // kevin

/**
 * 缺点：
 * 引用类型的属性被所有实例共享
 * 不能向 Parent 传参
 */
