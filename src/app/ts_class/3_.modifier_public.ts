/**
 * @author Noah Sun
 * @email 
 * @create date 2017-07-27 04:09:37
 * @modify date 2017-07-27 04:09:37
 * @desc 类——修饰符（public）
*/

// 在typescript里，成员都是默认为pulic。
export class Animal {
    name: string;
    constructor(theName: string) {
        this.name = theName;
    }
    moveBy(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}`);
    }
}
