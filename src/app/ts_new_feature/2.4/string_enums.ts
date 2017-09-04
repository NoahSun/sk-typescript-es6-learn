/**
 * @author Noah Sun
 * @email 
 * @create date 2017-09-04 12:49:16
 * @modify date 2017-09-04 12:49:16
 * @desc 枚举成员变量包含字符串构造器
*/

export enum Colors {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}

// NOTE: 字符串枚举不能被方向映射到枚举成员的名字

console.log(Colors)

// Error, Colors["RED"]
