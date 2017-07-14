/**
 * @author Noah Sun
 * @email 
 * @create date 2017-07-14 12:40:27
 * @modify date 2017-07-14 12:40:27
 * @desc 使用es6的generator遍历传入的Primise类型的数组参数
*/

let count = 1;
const tick = () => new Promise(resolve => {
    setTimeout(() => {
        console.log('tick %s after %s ms', count++, 1000);
        resolve();
    }, 1000);
});

function* GeneratorFactory() {
    yield tick();
    yield tick();
    yield tick();
}

export const run = (generator: Generator) => {
    let ret = generator.next();
    if (ret.done) return;
    console.log(ret.value.toString());
    ret.value.then((response: any) => {
        console.log(response)
        run(generator);
    });
}

run(GeneratorFactory());