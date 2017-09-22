/**
 * @author Noah Sun
 * @email 
 * @create date 2017-09-22 11:55:56
 * @modify date 2017-09-22 11:55:56
 * @desc 工厂模式 —— 简单工厂 和 标准工厂
 * 第二部分：标准工厂。不同于简单工厂的单例模式，而是使用子类。
 * 工厂模式的官方定义：在子类中对一个类的成员对象进行实例化
*/

import { Car, CarDecorator, PowerLocksDecorator, PowerWindowsDecorator, ACDecorator } from './6_decorator_pattern.js';

const CarShop = function () { };
CarShop.prototype = {
    sellCar: function (type, features) {
        const car = this.manufactureCar(type, features);
    },
    decorateCar: function (car, features) {
        // 给车加上新的功能，使用和CarFactory里相同的技术
        let newCar;
        const baseCar = new Car();

        const featureList = { /* ... */ };

        // 遍历features到featureList

        // 根据一定顺序添加
        newCar = new CarDecorator(baseCar);
        newCar = new CarDecorator(car);
        /* ... 其他的功能装饰 */

        return newCar;

    },
    // manufactureCar就是工厂方法，该方法必须由子类来实现
    manufactureCar: function (type, features) {
        throw new Error('manufactureCar必须由子类开实现');
    }
}

// 实现
const JoeCarShop = function () { };
JoeCarShop.prototype = new CarShop();
JoeCarShop.prototype.manufactureCar = function (type, features) {
    let car;
    switch (type) {
        case 'sedan':
            car = new JoeSedanCar();
            break;
        case 'hatchback':
            car = new JoeHetchbackCar();
            break;
        case 'coupe':
        default:
            car = new JoeCoupeCar();
            break;
    }

    return this.decorateCar(car, features);
}

// Joe的店
const JoeShop = new JoeCarShop();
const joeCar = JoeShop.sellCar('sedan', ['powerlocks']);
