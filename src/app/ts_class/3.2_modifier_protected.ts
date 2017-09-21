/**
 * @author Noah Sun
 * @email 
 * @create date 2017-07-27 06:15:38
 * @modify date 2017-07-27 06:15:38
 * @desc 类——修饰符（protected）
*/

export class Person {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Employee extends Person {
    private department: string;
    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }
    getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}`;
    }
}

const howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
// name成员只能在Person类或Person的子类中使用
// console.log(howard.name);

// 构造函数（constructor）也是可以被标记成protected的。
// 这就意味着这个类不能在包含它的类外被实例化，但是可以被继承。

class Person1 {
    protected name: string;
    protected constructor(theName: string) {
        this.name = theName;
    }
}

// Employee1 可以继承 Person1
class Employee1 extends Person1 {
    private department: string;
    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }
}

const noah = new Employee1("Noah", "IT");
// Error: The 'Person' constructor is protected
// let john = new Person1("John");
