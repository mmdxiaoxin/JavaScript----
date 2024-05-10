function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayName = function () {
    console.log(this.name);
};
const person = new Person();
const person1 = new Person('john', 18);

console.log('person:', person);
console.log('person.__proto__:', person.__proto__);
//person.__proto__ -> Person.prototype
console.log('Person.prototype:', Person.prototype);
//Person.prototype.__proto__ -> Object.prototype
console.log(
    'Person.prototype.__proto__:',
    Person.prototype.__proto__,
);

//Person.prototype.constructor -> Person
console.log('Person:', Person);
console.log(
    'Person.prototype.constructor:',
    Person.prototype.constructor,
);

for (const key in person) {
    console.log(key);
}
