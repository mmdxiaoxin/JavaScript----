## JavaScript常见面试题

本文旨在汇集并总结一系列常见的JavaScript面试问题及其解答，以期帮助读者巩固知识基础，想加强自己的能力可以去看看《JavaScript高级程序设计》《JavaScript权威指南》这两本书。（入门可以先看第一本）

### 第1章 JavaScript变量

var、let、const` 的差异？

|       | 作用域     | 暂时性死区 | 重复声明 | 全局属性 |
| ----- | ---------- | :--------: | :------: | :------: |
| var   | 函数作用域 |     ×      |    √     |    √     |
| let   | 块级作用域 |     √      |    ×     |    ×     |
| const | 块级作用域 |     √      |    ×     |    ×     |

谈谈作用域？

什么是变量提升？

### 第2章 JavaScript数据类型

JavaScript 数据类型有哪些？

原始数据类型和引用数据类型的区别？

谈谈 undefined 和 null ？

如何做类型判断？

JavaScript 如何做类型转换？

为什么 0.1 + 0.2 !== 0.3 ？

### 第3章 对象、类

JavaScript 创建对象有哪些方式？

如何理解继承和原型链？

继承有哪几种方式？

如何判断一个对象属于某个类？

Map 和 WeakMap 有什么区别？

如何实现深拷贝和浅拷贝？

### 第4章 函数

什么是闭包？

#### this 的指向有哪些？

- 全局上下文
- 函数上下文
- 类上下文
- 箭头函数
- 原型链中的this
- 作为一个DOM事件处理函数
- getter与setter中的this

类数组的转化方式有哪些？

如何模拟实现函数方法：call()、apply()、bind()？

立即调用函数表达式（IIFE）有什么特点？

箭头函数有什么特点？

如何实现防抖和节流？

### 第5章 Promise & Async/await 

#### 1.谈谈你对Promise的理解

> Promise是一种在JavaScript中用于处理异步操作的编程模式。它表示一个尚未完成但预计在未来某个时刻完成的操作的结果。Promise允许我们以更简洁、易读的方式处理异步操作，避免了传统的回调地狱（callback hell）问题。

Promise有三种状态：

1. pending（待定）：初始状态，既不是fulfilled，也不是rejected。
2. fulfilled（已实现）：表示异步操作已成功完成。
3. rejected（已拒绝）：表示异步操作失败。

Promise具有以下特点：

1. Promise对象是不可变的，一旦创建，其状态就不能再被改变。
2. Promise状态只能从pending变为fulfilled或rejected，不能逆向改变，且只能改变一次。
3. Promise允许我们将成功和失败的处理函数分开，增加代码的可读性。

缺点：

1. 无法取消：一旦创建了 Promise，就无法取消它。这可能导致在某些情况下，不再需要结果的异步操作仍然在执行。
2. 总是异步：Promise 的回调总是异步执行，即使操作已经完成。这可能会导致一些意外的行为，特别是在执行顺序敏感的情况下。
3. 调试困难：由于 Promise 的链式调用和异步特性，调试 Promise 可能比调试同步代码更具挑战性。错误堆栈可能不够清晰，难以确定问题出在哪里。

Promise基本用法包括：

1. 创建Promise对象：通过`new Promise(executor)`创建一个Promise对象，其中executor是一个执行器函数，接受两个参数：resolve和reject。成功时调用resolve函数并传递结果，失败时调用reject函数并传递原因。
2. 链式调用：通过`.then()`方法处理fulfilled状态，接受一个回调函数作为参数，当Promise状态变为fulfilled时调用。`.catch()`方法处理rejected状态，接受一个回调函数作为参数，当Promise状态变为rejected时调用。
3. Promise.all：接受一个Promise数组作为参数，当所有Promise都变为fulfilled状态时返回一个新的Promise，其值为所有Promise结果的数组。如果有任意一个Promise变为rejected状态，则返回的Promise也变为rejected，且返回原因是第一个rejected的Promise的原因。
4. Promise.race：接受一个Promise数组作为参数，返回一个新的Promise，其状态和结果与第一个完成（无论是fulfilled还是rejected）的Promise相同。

一个比较常见的输出题：



两个比较复杂的输出题：

1

```javascript
new Promise((resolve) => {
    let resolvedPromise = Promise.resolve();
    resolve(resolvedPromise);
}).then(() => {
    console.log('resolvePromise resolved');
});

Promise.resolve()
    .then(() => {
        console.log('promise1');
    })
    .then(() => {
        console.log('promise2');
    })
    .then(() => {
        console.log('promise3');
    });
```

2

```javascript
Promise.resolve()
    .then(() => {
        console.log(0);
        return Promise.resolve(4);
    })
    .then((res) => {
        console.log(res);
    });

Promise.resolve()
    .then(() => {
        console.log(1);
    })
    .then(() => {
        console.log(2);
    })
    .then(() => {
        console.log(3);
    })
    .then(() => {
        console.log(5);
    })
    .then(() => {
        console.log(6);
    });
```

如何模拟实现 Promise？

介绍一下 async/await

### 第6章 代理与反射

模块规范

### 第7章 JavaScript运行时

谈谈对执行上下文的理解？

简单介绍一下垃圾回收机制

JavaScript 事件循环是什么？

JavaScript 中内存泄漏有哪几种情况？

JavaScript 的本地存储有哪些方式？

### 第8章 事件

事件捕获

事件冒泡

DOM事件流

### 第9章 网络请求与远程资源

跨域资源共享

### 第10章 模块

模块规范：CJS 与 ESM，有什么不同点？

> ESM（ECMAScript Modules）和 CommonJS 是 JavaScript 中两种不同的模块系统。它们都允许将代码拆分成可重用的模块，并在需要时导入这些模块。ESM 和 CommonJS 的主要区别在于它们的语法、加载机制、作用域、循环依赖处理、兼容性和使用场景以及实时绑定与值拷贝。尽管它们在某些方面有所不同，它们都是为了解决 JavaScript 模块化编程的问题。

|            | ECMAScript Modules                                           | CommonJS                                                     |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 语法       | 使用 import 和 export 关键字                                 | 使用 require 和 module.exports关键字                         |
| 加载       | 静态加载                                                     | 运行时加载                                                   |
| 作用域     | 模块作用域                                                   | 文件作用域                                                   |
| 循环依赖   | ESM 可以更好地处理循环依赖，因为模块是静态加载的。在循环依赖中，导入的值可能是不完整的，但不会导致错误。 | CommonJS 在处理循环依赖时可能会遇到问题，因为模块是运行时加载的。这可能导致在循环依赖中的模块中获得一个不完整的对象。 |
| 兼容性     | 通常用于现代 Web 开发                                        | 主要用于 Node.js 环境                                        |
| 导入的值   | 使用实时绑定，当导入的值发生更改时，导入模块的值也会跟着更改。这意味着导入的值始终保持最新。 | 使用值拷贝，当模块被导入时，值被复制到导入模块。这意味着在导入模块中，值的更改不会反映到原始模块，导入的值在导入时是固定的。 |
| 导出的值   | 导出值是**映射关系**，可读，不可修改，但可通过导出的函数修改导出的值。 | 导出**值的拷贝**，可以修改导出的值。                         |
| export使用 | export和export default支持一起使用。                         | module.exports和exports不支持一起使用，会被覆盖。            |

