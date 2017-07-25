/**
 * @author Noah Sun
 * @email 
 * @create date 2017-07-24 06:09:10
 * @modify date 2017-07-24 06:09:10
 * @desc 接口——混合类型
*/

export interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

// 一个接口可以同时作为函数和对象使用，并带有额外的属性

// ----------------------- ↓
function getCounter(): Counter {
    // --------------- ↓
    let counter = <Counter>function (start: number) {
        console.log(start);
        return start.toString();
    };
    counter.interval = 123;
    counter.reset = () => {
        console.log("counter reset function.");
    }
    return counter;
}

let c = getCounter();
c(10);
c.reset();
console.log(c.interval);
