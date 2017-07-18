/**
 * @author Noah Sun
 * @email 
 * @create date 2017-07-19 12:46:05
 * @modify date 2017-07-19 12:46:05
 * @desc generator捕获异常
*/

// 输出：
// { value: 3, done: false }
// 出错了！！！
// { value: undefined, done: true }

const colors = require('colors');

function* gen(x) {
    let y;
    try {
        y = yield x + 2;
    } catch (error) {
        console.error(error);
    }
    return y;
}

const g = gen(1);
console.log(g.next());
console.log(g.throw('出错了！！！'['red']));
