/**
 * @author Noah Sun
 * @email 
 * @create date 2017-07-18 12:24:40
 * @modify date 2017-07-18 12:24:40
 * @desc co使用async/await
*/

export const tick = (time: any) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(time);
    }, time);
});

const asyncFn = async () => {
    let time;
    console.log('start run...');

    time = await tick(1500);
    console.log(time);

    time = await tick(500);
    console.log(time);

    time = await tick(1000);
    console.log(time);
}

asyncFn();
