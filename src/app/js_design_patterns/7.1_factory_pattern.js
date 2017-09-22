/**
 * @author Noah Sun
 * @email 
 * @create date 2017-09-21 05:25:40
 * @modify date 2017-09-21 05:25:40
 * @desc 工厂模式 —— 简单工厂 和 标准工厂
 * 第一部分：简单工厂。它就像一个单例，它有一个或多个方法来创建或返回对象
*/

import { Car, CarDecorator, PowerLocksDecorator, PowerWindowsDecorator, ACDecorator } from './6_decorator_pattern.js';

const CarFactory = {
    makeCar: function (features = []) {
        let car = new Car();

        // 如果指定了功能就把功能加到car上
        if (features && features.length) {
            const i = 0,
                l = features.length;
            for (; i < l; i++) {
                const feature = features[i];
                switch (feature) {
                    case 'powerwindows':
                        car = new PowerWindowsDecorator(car);
                        break;

                    case 'powerlocks':
                        car = new PowerLocksDecorator(car);
                        break;

                    case 'ac':
                        car = new ACDecorator(car);
                        break;

                    default:
                        console.log(`${feature} 不能被添加`);
                        break;
                }
            }
        }

        return car;
    }
}

// 调用工厂方法
const awesomeCar = CarFactory.makeCar(['powerlocks', 'powerwindows', 'ac']);

const normalCar = CarFactory.makeCar();

/**
 * 虽然简单工厂能让解决问题变得简单，但是，上面对装饰者模式改进的代码还是有些问题。
 * //! 第一个问题，无法保证一个功能只被添加一次。
 * //! 第二个问题，如果这些功能的添加需要遵循特定的顺序的话，我们并没有一种强制的规则来约束。
 * 
 * 我们可以用工厂模式来修复这两个问题。
 * 最让人称道的是，所有的逻辑并不是包含在一个装饰者对象里，而是放在一个地方：工厂。
 * 
 */

//  优化添加功能次数限制的CarFactory
const CarFactoryWithTimeLimit = {
    makeCar: function (features = []) {
        let car = new Car();
        const featureList = {
            powerwindows: 0,
            powerlocks: 0,
            ac: 0
        };

        // 遍历所有的功能并添加到car上
        if (features && features.length) {
            let i = 0;
            const l = features.length;
            for (; i < l; i++) {
                featureList[features[i]] = 1;
            }
        }

        // 可以按照一定的顺序，并且只会添加一次功能
        if (featureList.powerwindows) {
            car = new PowerWindowsDecorator(car);
        }
        if (featureList.powerlocks) {
            car = new PowerLocksDecorator(car);
        }
        if (featureList.ac) {
            car = new ACDecorator(car);
        }

        return car;
    }
}

// 这样使用的时候就只会添加一次 ‘ac’的功能，并且是按照工厂内部的顺序添加
const featureCar = CarFactoryWithTimeLimit(['ac', 'ac', 'powerlocks', 'powerwindows']);

/**
 * 工厂模式的强大不只限于对装饰者。基本上对共享一个接口的任何对象都可以用工厂来创建，它可以帮我们从代码里玻璃独立的对象。
 * 你肯定知道你自己从工厂里接收到什么类型的对象，所以你唯一需要以来的只有工厂和一个接口，而无所谓有多少不同的对象实现了那个接口
 */

// 一个没有装饰者的工厂例子
const ModelFactory = {
    getModel: function (type) {
        switch (type) {
            case 'car':
                console.log('car');
                return this;

            case 'cars':
                console.log('cars');
                return this;

            default:
                break;
        }
    },
    get: function (type) {

    },
    getId: function () {

    },
    create: function () {

    },
    delete: function () {

    }
}

const CarController = {
    getCars: function () {
        const model = ModelFactory.getModel('cars');
        return model.get('all');
    },
    getCar: function (id) {
        const model = ModelFactory.getModel('car');
        return model.get(id);
    },
    createCar: function () {
        const model = ModelFactory.getModel('car');
        model.create();
        return model.getId();
    },
    deleteCars: function (carIds) {
        const model = ModelFactory.getModel('cars');
        model.delete(carIds);
    }
}
