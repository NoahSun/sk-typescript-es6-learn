/**
 * @author Noah Sun
 * @email 
 * @create date 2017-09-21 11:15:56
 * @modify date 2017-09-21 11:15:56
 * @desc 装饰者模式
 *       它是一种不通过子类或添加额外属性的方式就可以给对象增加新功能的手段
*/

export const Car = function () {
    console.log('装配：车架和其他零件');
}
Car.prototype = {
    start: function () {
        console.log('汽车发动');
    },
    drive: function () {
        console.log('汽车开动');
    },
    getPrice: function () {
        return 11000.00;
    }
}

// 添加一个简单的装饰器（只对Car的每个方法进行了简单的包装）
// 你需要传递一个Car（或者是CarDecorator）才能为它添加功能
export const CarDecorator = function (car) {
    this.car = car;
}
// 与CarDecorator实现相同的接口
CarDecorator.prototype = {
    start: function () {
        this.car.start();
    },
    drive: function () {
        this.car.drive();
    },
    getPrice: function () {
        return this.car.getPrice();
    }
}

// 添加一个装饰者对象，用来重写父级方法，添加我们想要的功能
export const PowerLocksDecorator = function (car) {
    CarDecorator.call(this, car);
    console.log('装配：升级添加动力锁');
}
PowerLocksDecorator.prototype = new CarDecorator();
// 复写drive功能
PowerLocksDecorator.prototype.drive = function () {
    this.car.drive();
    console.log('车门自动上锁');
}

export const PowerWindowsDecorator = function (car) {
    CarDecorator.call(this, car);
    console.log('装配：升级添加动力表盘');
}
PowerWindowsDecorator.prototype = new CarDecorator();

export const ACDecorator = function (car) {
    CarDecorator.call(this, car);
    console.log('装配：升级添加空调');
}
ACDecorator.prototype = new CarDecorator();
ACDecorator.prototype.start = function () {
    this.car.start();
    console.log('空调开启');
}

let car = new Car();

car = new PowerLocksDecorator(car);
car = new PowerWindowsDecorator(car);
car = new ACDecorator(car);

car.start();
car.drive();