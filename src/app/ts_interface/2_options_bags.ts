/**
 * @author Noah Sun
 * @email 
 * @create date 2017-07-24 04:12:52
 * @modify date 2017-07-24 04:12:52
 * @desc 接口——可选属性
*/

export interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({ color: "black" });
