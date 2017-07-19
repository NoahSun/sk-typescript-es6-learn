/**
 * @author Noah Sun
 * @email 
 * @create date 2017-07-19 05:01:16
 * @modify date 2017-07-19 05:01:16
 * @desc 装饰器修饰类的属性
*/

function readonly(target, propertyKey, descriptor): MethodDecorator {
    console.log(target, propertyKey, descriptor);
    descriptor.writable = false;
    return descriptor;
}

class Person {
    @readonly
    name() {

    }
}
