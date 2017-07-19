/**
 * @author Noah Sun
 * @email 
 * @create date 2017-07-18 06:48:11
 * @modify date 2017-07-18 06:48:11
 * @desc 第一个decorator（装饰器）
*/

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
