/**
 * @author Noah Sun
 * @email 
 * @create date 2017-07-31 12:22:29
 * @modify date 2017-07-31 12:22:29
 * @desc 类——高级技巧（构造函数）
*/

export class Greeter {
    static standardGreeting: string = "Hello, there!";
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return `Hello, ${this.greeting}`;
    }
}

let greeter: Greeter;
greeter = new Greeter("world");
console.log(greeter.greet());

// 使用typeof
class Greeter1 {
    static standardGreeting: string = "Hello, there!";
    private _greeting: string;
    set greeting(msg: string) {
        this._greeting = msg;
    }
    get greeting() {
        return this._greeting
    }
    greet(): string {
        if (this._greeting) {
            return `Hello, ${this._greeting}`;
        } else {
            return Greeter1.standardGreeting;
        }
    }
}

let greeter1: Greeter1;
greeter1 = new Greeter1();
greeter1.greeting = "Noah";
console.log(greeter1.greet());

// 使用typeof取类的类型，也就是构造函数的类型。这个类型包含了类的所有静态成员和构造函数。
let greeterMaker: typeof Greeter1 = Greeter1;
greeterMaker.standardGreeting = "Hey there!";

let greeter2: Greeter1 = new greeterMaker();
console.log(greeter2.greet());
