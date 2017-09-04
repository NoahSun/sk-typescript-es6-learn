/**
 * @author Noah Sun
 * @email 
 * @create date 2017-09-04 06:41:18
 * @modify date 2017-09-04 06:41:18
 * @desc 回调参数的严格逆变
*/

export interface Mappable<T> {
    map<U>(f: (x: T) => U): Mappable<U>;
}

declare let a: Mappable<number>;
declare let b: Mappable<string | number>;

// a = b; //Error
b = a;
