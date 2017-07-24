/**
 * @author Noah Sun
 * @email 
 * @create date 2017-07-24 05:23:57
 * @modify date 2017-07-24 05:23:57
 * @desc 接口——继承
*/

export interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

interface PenStroke {
    penWidth: number;
}

interface Square1 extends Shape, PenStroke {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;

// 多接口继承
let square1 = <Square1>{};
square1.color = "blue";
square1.penWidth = 10;
square1.sideLength = 5.0;
