/**
 * @author Noah Sun
 * @email 
 * @create date 2017-07-24 12:25:06
 * @modify date 2017-07-24 12:25:06
 * @desc 接口——方法
*/

export interface SearchFunc {
    (source: string, subString: string): boolean;
}

// 隐式匹配 方法、参数、返回值 的类型
let mySearch1: SearchFunc;
mySearch1 = (source, subString) => {
    let result = source.search(subString);
    return result > -1;
}

// 参数名可不同
let mySearch2: SearchFunc;
mySearch2 = (src, sub) => {
    let result = src.search(sub);
    return result > -1;
}

// 完整的使用
let mySearch: SearchFunc;
mySearch = (source: string, subString: string): boolean => {
    let result = source.search(subString);
    return result > -1;
}
