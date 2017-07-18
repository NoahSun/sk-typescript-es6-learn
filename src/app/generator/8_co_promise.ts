/**
 * @author Noah Sun
 * @email 
 * @create date 2017-07-18 11:29:22
 * @modify date 2017-07-18 11:29:22
 * @desc co中使用promise
*/
const colors = require('colors');
const co = require('co');

const tick = (time: any) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (time === 1500) reject(time);
        resolve(time);
    }, time);
});

export function* GeneratorFn() {
    let time;
    console.log('start run...');

    time = yield tick(500);
    console.log(time);

    time = yield tick(1000);
    console.log(time);

    time = yield tick(1500);
    console.log(time);

    // 传递给then
    return time;
}

co(GeneratorFn).then((res: any, ...other: any[]) => {
    console.log(res, other);
}).catch((res: any, ...other: any[]) => {
    console.log(`${res}`['cyan'], other);
});
