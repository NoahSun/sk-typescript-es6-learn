/**
 * @author Noah Sun
 * @email 
 * @create date 2017-07-27 03:16:36
 * @modify date 2017-07-27 03:16:36
 * @desc 类——继承
*/

export { }

// 基类
class Animal {
    name: string;
    constructor(theName: string) {
        this.name = theName;
    }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}\n`);
    }
}

// 子类
class Snake extends Animal {
    constructor(name: string) {
        // 包含构造函数的子类必须调用super()，它会执行基类的构造方法。
        super(name);
    }
    move(distanceInMeters: number = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

// 子类
class Horse extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters: number = 34) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

// 创建实例
let sam: Snake = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(100);
