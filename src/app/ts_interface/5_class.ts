/**
 * @author Noah Sun
 * @email 
 * @create date 2017-07-24 03:54:02
 * @modify date 2017-07-24 03:54:02
 * @desc 接口——类
*/

export interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number) { }
}

// 你也可以在接口中描述一个方法
interface ClockAndFuncInterface extends ClockInterface {
    setTime(d: Date);
}

class Clock1 implements ClockAndFuncInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}

// ! 类的静态部分和实例部分的区别
interface ClockConstructor {
    new (hour: number, minute: number);
}

// error
// Class 'Clock2' incorrectly implements interface 'ClockConstructor'.
//   Type 'Clock2' provides no match for the signature 'new (hour: number, minute: number): any'.
/*
    class Clock2 implements ClockConstructor {
        constructor(hour: number, minute: number) { }
    } 
*/

