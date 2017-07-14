/**
 * @author Noah Sun
 * @email 
 * @create date 2017-07-14 12:40:27
 * @modify date 2017-07-14 12:40:27
 * @desc 使用es6的generator遍历传入的函数类型的数组参数
*/

function* GeneratorFn(items: Function[]) {
    let index = 0,
        max = items.length;
    while (index < max) {
        yield items[index++];
    }
}

let count = 1;
const tick = (done: Function) => {
    setTimeout(() => {
        console.log('tick %s after %s ms', count++, 1000);
        done();
    }, 1000);
}

export const run = (generator: Generator) => {
    let ret = generator.next();
    if (ret.done) return;
    console.log(ret.value.toString());
    ret.value(() => run(generator));
}

run(GeneratorFn([tick, tick, tick]));
