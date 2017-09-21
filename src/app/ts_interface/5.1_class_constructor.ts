/**
 * @author Noah Sun
 * @email 
 * @create date 2017-07-24 04:20:31
 * @modify date 2017-07-24 04:20:31
 * @desc 对实例部分进行接口描述
*/

export interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}

interface ClockInterface {
    tick(): void;
}

// 为了方便我们定义一个构造函数 createClock，它用传入的类型创建实例。
function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    // 因为ctor是ClockConstructor接口中描述实例的类型为ClockInterface，所以new ctor()将返回ClockInterface类型
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}

class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}

// 创建不同类型的实例
// createClock的第一个参数是ClockConstructor类型，所以在使用是将会检查第一个参数是否符合构造函数签名
const digital = createClock(DigitalClock, 12, 17);
const analog = createClock(AnalogClock, 7, 12);

console.log(digital);
console.log(analog);
