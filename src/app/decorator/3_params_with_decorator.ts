/**
 * @author Noah Sun
 * @email 
 * @create date 2017-07-19 11:22:02
 * @modify date 2017-07-19 11:22:02
 * @desc 带有参数的decorator
*/

export const testable = (isTestable?: boolean): ClassDecorator => {
    return (target: any) => {
        console.log('使用了装饰器后就会执行');
        target.isTestable = isTestable;
        target.prototype.isTestable = isTestable;
    }
}

@testable(true)
class MyTestableClass {
    static isTestable;
    isTestable;
    constructor() {
        console.log('类的构造函数');
    }
}

let myTClass = new MyTestableClass();
console.log(myTClass.isTestable)

export const mixins = (...list: any[]) => {
    return (target: any) => {
        Object.assign(target.prototype, ...list);
    }
}

const Foo1 = {
    foo1(): void {
        console.log('foo1');
    }
}

const Foo2 = {
    foo2(): void {
        console.log('foo2');
    }
}

@mixins(Foo1, Foo2)
class MyClass {
    foo1: Function;
    foo2: Function;
    constructor() {

    }
}

let myClass = new MyClass();
myClass.foo1();
myClass.foo2();
