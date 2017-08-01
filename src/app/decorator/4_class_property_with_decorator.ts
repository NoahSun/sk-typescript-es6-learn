/**
 * @author Noah Sun
 * @email 
 * @create date 2017-07-19 05:01:16
 * @modify date 2017-07-19 05:01:16
 * @desc 装饰器修饰类的属性
*/

export function readonly(target: any, propertyKey: PropertyKey, descriptor: PropertyDescriptor) {
    descriptor.writable = false;
    return;
}

class Person {
    @readonly
    name() {
        console.log(1);
    }
}

Person.prototype.name = () => {
    console.log(2);
}

var p = new Person();
p.name = () => {
    console.log(3)
}
// 依然输出1，但是编写时不会报错
p.name();