/**
 * @author Noah Sun
 * @email 
 * @create date 2017-07-14 06:38:52
 * @modify date 2017-07-14 06:38:52
 * @desc 使用co中间件
*/

const colors = require('colors');
const co = require('co');

colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'red',
    info: 'green',
    data: 'blue',
    help: 'cyan',
    warn: 'yellow',
    debug: 'magenta',
    error: 'red'
});

const tick = (time: number) => (done: Function) => {
    console.log(done.toString());
    setTimeout(() => {
        done(null, time);
    }, time);
}

export function* GeneratorFunction() {
    let time, count = 1, total = 0;
    console.log('start run');
    time = yield tick(500);
    total += time;
    console.log('tick ' + `${count++}`['help'] + ' done after ' + `${time}`['help'] + ' ms');
    time = yield tick(1000);
    total += time;
    console.log('tick ' + `${count++}`['help'] + ' done after ' + `${time}`['help'] + ' ms');
    time = yield tick(1500);
    total += time;
    console.log('tick ' + `${count++}`['help'] + ' done after ' + `${time}`['help'] + ' ms');
    return 'the end! total time is ' + total;
}

co(GeneratorFunction).then((res: any) => console.log(`${res}`['info']));

co(function* () {
    const result = yield Promise.resolve(true);
    return result;
}).then(res => console.log(`${res}`['info']));

let fn = co.wrap(function* () {
    return yield Promise.resolve(true);
});

fn(true).then(res => console.log(`${res}`['help']));
