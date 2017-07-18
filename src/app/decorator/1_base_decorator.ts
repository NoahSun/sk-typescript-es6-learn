/**
 * @author Noah Sun
 * @email 
 * @create date 2017-07-18 06:48:11
 * @modify date 2017-07-18 06:48:11
 * @desc 第一个decorator（装饰器）
*/

function testable(target) {
    target.isTestable = true;
}

@testable
class MyTestableClass {
    
}

