/**
 * @author Noah Sun
 * @email 
 * @create date 2017-07-14 06:38:52
 * @modify date 2017-07-14 06:38:52
 * @desc 使用co中间件
*/

import * as co from 'co';
import * as colors from 'colors';

colors.setTheme({
    data: "blue",
    debug: "magenta",
    error: "red",
    help: "cyan",
    info: "green",
    input: "grey",
    prompt: "red",
    silly: "rainbow",
    verbose: "cyan",
    warn: "yellow"
});

const tick = (time: number) => (done: Function) => {
    console.log(done.toString());
    setTimeout(() => {
        done(null, time);
    }, time);
};

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
