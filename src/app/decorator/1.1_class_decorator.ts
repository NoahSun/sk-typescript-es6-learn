/**
 * @author Noah Sun
 * @email 
 * @create date 2017-07-21 05:01:18
 * @modify date 2017-07-21 05:01:18
 * @desc 类装饰器
*/

export function classDecorator<T extends { new(...arg: any[]): {} }>(constructor: T) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    };
}

@classDecorator
class Greeter {
    property = "property";
    hello: string;
    prop1: any;
    constructor(m: string) {
        // 装饰器执行，构造函数中相同的属性会被覆盖
        this.hello = m;
        this.prop1 = 'init prop';
    }
}

class Greeter1 {
    property = "property";
    hello: string;
    constructor(m: string) {
        this.hello = m;
    }
}

console.log(new Greeter("world"));
console.log(new Greeter1("world"));
