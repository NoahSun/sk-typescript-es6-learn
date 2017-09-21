/**
 * @author Noah Sun
 * @email 
 * @create date 2017-07-18 06:48:11
 * @modify date 2017-07-18 06:48:11
 * @desc 第一个decorator（装饰器），修饰类
 *       使用了装饰器的地方，会优先执行装饰器，使其装饰的类、类方法实现其修改
 *       tsc支持的编译目标版本增加 ES3
*/

// 例一：
export function testable(target) {
    target.isTestable = true;
    return;
}

// tsconfig.json加上了expirementalDecorators:true还需要加上include:['项目相关源码路径']
@testable
class MyTestableClass {
    static isTestable;
}

console.log(MyTestableClass.isTestable);

// 例二：
function sealed(constructor: Function) {
    Object.seal<Function>(constructor);
    Object.seal(constructor.prototype);
}

@sealed
class MyClass {
    a: number = 2;
    b: string = 'three';
    constructor(num: number) {
        console.log('constructor: ' + num);
        this.a = 2;
    }
    [otherProp: string]: any;
}

const mc = new MyClass(1);
mc.b = '1';
mc.c = 3;
try {
    MyClass.prototype.c = 3;
} catch (e) {
    console.log('使用了sealed装饰器后不能配置(添加、删除)类的属性，只能更改值');
}

console.log(mc.b);
console.log(mc.c);
console.log(MyClass.prototype.c);
