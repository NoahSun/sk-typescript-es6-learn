/**
 * @author Noah Sun
 * @email 
 * @create date 2017-09-04 05:56:09
 * @modify date 2017-09-04 05:56:09
 * @desc 对泛型函数进行更严格的检查
*/

type A = <T, U>(x: T, y: U) => [T, U];
type B = <S>(x: S, y: S) => [S, S];

export function f(a: A, b:B) {
    // a = b;  // Error
    b = a;  // Ok
}
