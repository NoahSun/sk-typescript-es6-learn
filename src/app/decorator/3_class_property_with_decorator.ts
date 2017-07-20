/**
 * @author Noah Sun
 * @email 
 * @create date 2017-07-19 05:01:16
 * @modify date 2017-07-19 05:01:16
 * @desc 装饰器修饰类的属性
*/

function readonly(target: any, propertyKey: PropertyKey, descriptor: TypedPropertyDescriptor<any>): MethodDecorator {
    descriptor.writable = false;
    return;
}

class Person {
    @readonly
    name() {
        console.log(1);
    }
}

var p = new Person();
p.name = () => {
    console.log(2)
}
// 依然输出1，但是编写时不会报错
p.name();