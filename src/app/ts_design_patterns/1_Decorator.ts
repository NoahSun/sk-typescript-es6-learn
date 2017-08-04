/**
 * @author Noah Sun
 * @email 
 * @create date 2017-08-04 10:22:08
 * @modify date 2017-08-04 10:22:08
 * @desc typescript设计模式——装饰器模式
*/

abstract class Car {
    public description: string;

    public getDescription(): string {
        return this.description;
    }

    public abstract cost(): number;
}

class ModelS extends Car {
    public description = "Model S";

    public cost(): number {
        return 73000;
    }
}

class ModelX extends Car {
    public description = "Model X";

    public cost(): number {
        return 77000;
    }
}

abstract class CarOptions extends Car {
    decoratedCar: Car;
    public abstract getDescription(): string;
    public abstract cost(): number;
}

class EnhancedAutoPilot extends CarOptions {
    decoratedCar: Car;
    constructor(car: Car) {
        super();
        this.decoratedCar = car;
    }
    public getDescription(): string {
        return this.decoratedCar.getDescription() + ', Enhanced AutoPilot';
    }
    public cost(): number {
        return this.decoratedCar.cost() + 5000;
    }
}

let myTesla = new ModelS();
myTesla = new EnhancedAutoPilot(myTesla);

myTesla = new ModelX();
myTesla = new EnhancedAutoPilot(myTesla);
console.log(myTesla.cost());

// 总结：
/**
 * 必须要有抽象类来为其它类提供装饰，
 * 对需要增强的成员方法定义抽象方法
 */
