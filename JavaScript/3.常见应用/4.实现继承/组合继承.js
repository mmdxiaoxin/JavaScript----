function Father(name, age) {
    this.name = name;
    this.age = age;
    this.hobby = ['敲代码', '解Bug', '睡觉'];
}
Father.prototype.sayName = function () {
    console.log(this.name, 666);
};
Father.prototype.x = 1;

function Child(name, age) {
    Father.call(this, name, age); // 调用父类的构造函数 (继承父类的属性)
    this.a = 1;
}
Child.prototype = Object.create(Father.prototype);
