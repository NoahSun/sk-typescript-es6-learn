/**
 * @author Noah Sun
 * @email 
 * @create date 2017-07-21 12:39:46
 * @modify date 2017-07-21 12:39:46
 * @desc 装饰器组装
 * 当多个装饰器应用于一个声明三，它们的求值方式与复合函数类似。
 * 在这个模型下，当复合f和g时，复合的效果 (f ∘ g)(x) 等同于 f(g(x))
*/

// 输出：
// f(): evaluated, prop is { 1 }
// g(): evaluated, prop is { 2 }
// g(): called
// f(): called
// 3

function f(prop) {
    console.log(`f(): evaluated, prop is { ${prop} }`);
    return (target, propertyKey, descriptor) => {
        console.log("f(): called");
        return descriptor;
    }
}

function g(prop): MethodDecorator {
    console.log(`g(): evaluated, prop is { ${prop} } `);
    return (target: C, propertyKey: PropertyKey, descriptor: TypedPropertyDescriptor<any>): TypedPropertyDescriptor<any> => {
        console.log("g(): called");
        return descriptor;
    }
}

export class C {
    @f(1) @g(2)
    x(a) {
        console.log(a)
    }
}

const c = new C();
c.x(3);
