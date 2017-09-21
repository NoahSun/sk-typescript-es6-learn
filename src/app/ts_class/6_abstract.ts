/**
 * @author Noah Sun
 * @email 
 * @create date 2017-07-31 11:40:46
 * @modify date 2017-07-31 11:40:46
 * @desc 类——抽象类
 *       抽象类作为其他派生类的基类使用。
 *       它们一般不会直接被实例化。
 *       不同于接口，抽象类可以包含成员的实现细节。
 *       abstract关键字是用于定义抽象类和在抽象类内部定义的抽象方法。
 *       抽象类中的抽象方法不包含具体的实现并且必须在派生类总实现。
 *       抽象方法也可包含访问修饰符
*/

// 抽象类和抽象方法的定义
export abstract class Animal {
    abstract makeSound(): void;
    move(): void {
        console.log("roaming the earch...");
    }
}

// 抽象类和抽象方法的使用示例
abstract class Department {
    constructor(public name: string) { }
    printName(): void {
        console.log("Department name: ", this.name);
    }
    abstract printMeeting(): void;  // 抽象方法必须在派生类中实现
}

class AccountingDepartment extends Department {
    constructor() {
        super("Accounting and Auditing");
    }
    // 必须实现的抽象方法
    printMeeting(): void {
        console.log("The Accounting Deparment meets each Monday at 10am.");
    }
    generateReport(): void {
        console.log("Generating accounting report...");
    }
}

// 实例可以为抽象类型
// let department: Department;
let department: AccountingDepartment;
// 不能直接创建抽象类的实例
// department = new Department();
department = new AccountingDepartment();
department.printName();
department.printMeeting();
department.generateReport();
