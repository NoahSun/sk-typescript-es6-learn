/**
 * @author Noah Sun
 * @email 
 * @create date 2017-07-31 01:11:39
 * @modify date 2017-07-31 01:11:39
 * @desc 类——高级技巧（类当作接口）
*/

export class Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {
    x: 1,
    y: 2,
    z: 3
}
