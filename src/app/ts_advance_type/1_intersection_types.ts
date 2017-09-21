/**
 * @author Noah Sun
 * @email 
 * @create date 2017-08-07 10:46:27
 * @modify date 2017-08-07 10:46:27
 * @desc 高级类型——交叉类型
 * 例如，Person & Serializable & Loggable 同时是 Person 和 Serializable 和 Loggable。
 * 也就是说这个类型的对象同时拥有了这三种类型的成员
*/

export function extend<T, U>(first: T, second: U): T & U {
    const result = {} as T & U;
    for (const id in first) {
        (<any> result)[id] = (first as any)[id];
    }
    for (const id in second) {
        if (!result.hasOwnProperty(id)) {
            (result as any)[id] = (second as any)[id];
        }
    }
    return result;
}

class Person {
    constructor(public name: string) { }
}

interface Loggable {
    log(): void;
}

class ConsoleLogger implements Loggable {
    log() {
        console.log("logging something");
    }
}

const jim = extend(new Person("Jim"), new ConsoleLogger());
const n = jim.name;
jim.log();
console.log(jim);
