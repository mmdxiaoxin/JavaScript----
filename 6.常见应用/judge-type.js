/**
 * typeof
 * 优点：能够快速区分基本数据类型
 * 缺点：不能将Object、Array和Null区分，都返回object
 */
console.log(typeof 1); // number
console.log(typeof true); // boolean
console.log(typeof 'mc'); // string
console.log(typeof Symbol); // function
console.log(typeof function () {}); // function
console.log(typeof console.log); // function
console.log(typeof []); // object
console.log(typeof {}); // object
console.log(typeof null); // object
console.log(typeof undefined); // undefined

/**
 * instanceof
 * 优点：能够区分Array、Object和Function，适合用于判断自定义的类实例对象
 * 缺点：Number，Boolean，String基本数据类型不能判断
 */
console.log(1 instanceof Number); // false
console.log(true instanceof Boolean); // false
console.log('str' instanceof String); // false
console.log([] instanceof Array); // true
console.log(function () {} instanceof Function); // true
console.log({} instanceof Object); // true

const numObject = new Number(10); // 创建一个 Number 对象
const boolObject = new Boolean(true); // 创建一个 Boolean 对象
const strObject = new String('hello'); // 创建一个 String 对象
console.log(numObject); // [Number: 10]
console.log(boolObject); // [Boolean: true]
console.log(strObject); // [String: 'hello']

/**
 * Object.prototype.toString.call()
 * 优点：精准判断数据类型
 * 缺点：写法繁琐不容易记，推荐进行封装后使用
 */
var toString = Object.prototype.toString;
console.log(toString.call(1)); //[object Number]
console.log(toString.call(true)); //[object Boolean]
console.log(toString.call('mc')); //[object String]
console.log(toString.call([])); //[object Array]
console.log(toString.call({})); //[object Object]
console.log(toString.call(function () {})); //[object Function]
console.log(toString.call(undefined)); //[object Undefined]
console.log(toString.call(null)); //[object Null]
