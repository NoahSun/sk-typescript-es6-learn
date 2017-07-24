/**
 * @author Noah Sun
 * @email 
 * @create date 2017-07-24 12:17:58
 * @modify date 2017-07-24 12:17:58
 * @desc 接口——只读属性
*/

export interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = {
    x: 10,
    y: 10
};

// Cannot assign to 'x' because it is a constant or a read-only property.
// p1.x = 5;
// Cannot assign to 'y' because it is a constant or a read-only property.
// p1.y = 5;

let a: number[] = [1, 2, 3];
let ro: ReadonlyArray<number> = a;
// errors
// ro[0] = 12;
// ro.push(12);
// ro.length = 100;
// a = ro;              // Type 'ReadonlyArray<number>' is not assignable to type 'number[]'.
a = ro as number[];     // 可用类型断言重写
