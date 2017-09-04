/**
 * @author Noah Sun
 * @email 
 * @create date 2017-09-04 02:49:32
 * @modify date 2017-09-04 02:49:32
 * @desc 返回类型作为推断目标
*/

type ParamsType<T, U> = (x: T) => U;

type ReturnedType<T, U> = (arr: T[]) => U[];

export function arrayMap<T, U>(f: ParamsType<T, U>): ReturnedType<T, U> {
    return arr => arr.map(f);
}

const arr = arrayMap((x: object) => {
    x['id'] = 1;
    return x;
})([{ name: 1 }]);

console.log(arr);
