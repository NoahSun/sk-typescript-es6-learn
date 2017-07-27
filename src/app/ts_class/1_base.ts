/**
 * @author Noah Sun
 * @email 
 * @create date 2017-07-27 03:11:12
 * @modify date 2017-07-27 03:11:12
 * @desc 类——一个简单的例子
*/

class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return `Hello, ${this.greeting}`;
    }
}

// 使用 new 构造一个Greeter类的实例。
// 它会调用之前定义的构造函数，创建一个Greeter类型的新对象，并执行构造函数初始化它。
let greeter = new Greeter("word");
