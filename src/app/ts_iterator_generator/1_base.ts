/**
 * @author Noah Sun
 * @email 
 * @create date 2017-08-02 03:05:18
 * @modify date 2017-08-02 03:05:18
 * @desc 生成器
*/

export function* g(): IterableIterator<string> {
    for (let i = 0; i < 100; i++) {
        yield i.toString();
    }
    // otherStringGenrerator 必须可遍历，并且元素类型需要和当前返回类型一样，这里是string
    // yield* otherStringGenerator();
}

const gi = g()
console.log(gi.next())

// 没有标注类型的生成器函数会自动推演类型
function* g1() {
    for (let i = 0; i < 100; i++) {
        yield ""; //推导出g1的返回类型为string
    }
    // 
    // yield* otherGenerator(); //推到出g1返回类型与otherGenerator返回类型相同
}
