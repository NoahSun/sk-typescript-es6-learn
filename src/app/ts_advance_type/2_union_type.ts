/**
 * @author Noah Sun
 * @email 
 * @create date 2017-08-07 11:00:46
 * @modify date 2017-08-07 11:00:46
 * @desc 高级类型——联合类型
 * 使用竖线（ | ）分隔每个类型
*/

function padLeft(value: string, padding: string | number) {
    if (typeof padding === "number") {
        return Array(padding + 1).join("") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, got ${padding}`);
}

console.log(padLeft("Hello world", "some, "));
