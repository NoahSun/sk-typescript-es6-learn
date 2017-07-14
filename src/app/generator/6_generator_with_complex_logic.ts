/**
 * @author Noah Sun
 * @email 
 * @create date 2017-07-14 04:37:38
 * @modify date 2017-07-14 04:37:38
 * @desc !!!注意，最关键的到了。可以通过迭代，把结果返回出去。
*/

let count = 1;
const tick = (time: any) => new Promise((resolve) => {
    setTimeout(() => {
        console.log('tick %s after %s ms', count++, time);
        // 还可以把结果通过resolve返回给then方法
        // resolve('some result');
        resolve(time);
    }, time);
});

function* GeneratorFn() {
    let time;
    console.log('start run...');
    time = yield tick(1000);
    console.log(count - 1, time);
    time = yield tick(1001);
    console.log(count - 1, time);
    time = yield tick(1002);
    console.log(count - 1, time);
}

export const run = (generator: Generator, res?: any) => {
    // 向next传递res结果，做为上一个yield的返回值，关键！！！
    let ret = generator.next(res);
    if (ret.done) return;
    console.log(res);
    ret.value.then((response: any) => {
        console.log(response);
        run(generator, response);
    })
}

run(GeneratorFn());
