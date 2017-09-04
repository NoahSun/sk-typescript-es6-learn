/**
 * @author Noah Sun
 * @email 
 * @create date 2017-09-04 03:59:11
 * @modify date 2017-09-04 03:59:11
 * @desc 从上下文类型中推断类型参数
*/

// 2.4之前，y将是any类型，意味着虽然程序会检查类型，但你却可以使用y做任何事情
export let f: <T>(x: T) => T = y => y;
// 比如：
// let f: <T>(x: T) => T = y => y() + y.foo.bar;

// 2.4里，右边的函数会隐式地获得类型参数（隐示约束为{}），并且y的类型会被推断为那个类型参数的类型。
f(1) // 返回 1
f(false) // 返回 false
f('') // 返回 空字符串