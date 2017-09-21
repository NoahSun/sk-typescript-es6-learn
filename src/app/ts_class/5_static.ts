/**
 * @author Noah Sun
 * @email 
 * @create date 2017-07-28 12:36:17
 * @modify date 2017-07-28 12:36:17
 * @desc 类——静态属性
*/

export class Grid {
    private static origin = {
        x: 0,
        y: 0
    };
    constructor() {

    }
    set origin(point: { x: number, y: number }) {
        Grid.origin = point;
    }
    get origin() {
        return Grid.origin;
    }
}

const grid = new Grid();
console.log(grid.origin);
grid.origin = {
    x: 1, y: 2
};
console.log(grid.origin);
// static也可以加上private修饰符，但是就不能直接用Grid.origin了
// console.log(Grid.origin);
