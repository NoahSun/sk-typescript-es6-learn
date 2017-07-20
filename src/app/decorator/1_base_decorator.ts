/**
 * @author Noah Sun
 * @email 
 * @create date 2017-07-18 06:48:11
 * @modify date 2017-07-18 06:48:11
 * @desc 第一个decorator（装饰器），修饰类
*/

// 例一：
function testable(target) {
    target.isTestable = true;
    return;
}

// tsconfig.json加上了expirementalDecorators:true还需要加上include:['项目相关源码路径']
@testable
export class MyTestableClass {
    static isTestable;
}

console.log(MyTestableClass.isTestable);

// 例二：
function sealed(target: Function) {
    Object.seal<Function>(target);
    Object.seal(target.prototype);
}

@sealed
class MyClass {
    constructor() {
        console.log(1);
    }
    a: number = 2;
    b: string = 'three';
    [otherProp: string]: any;
}

const mc = new MyClass();
mc.b = '1';
mc.c = 3;
try {
    MyClass.prototype.c = 3
}
catch (e) {
    console.log('使用了sealed装饰器后不能配置(添加、删除)类的属性，只能更改值');
}

console.log(mc.c);
console.log(MyClass.prototype.c);
