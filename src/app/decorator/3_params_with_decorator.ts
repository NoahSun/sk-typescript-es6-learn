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
        target = function () {
            console.log("这里将会修改类的构造函数");
        }
        target.isTestable = isTestable;             //静态成员
        target.prototype.isTestable = isTestable;   //原型
        // 返回类，做出的修改才有意义，不然原来的类将不会被修改
        return target;
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
// 之后对类做的相关成员的修改，将不会生效
MyTestableClass.isTestable = false;

let myTClass = new MyTestableClass();
console.log(myTClass.isTestable)

// ------------------------------------------------------------------------ //

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
