/**
 * @author Noah Sun
 * @email 
 * @create date 2017-07-27 05:48:29
 * @modify date 2017-07-27 05:48:29
 * @desc 类——修饰符（private）
*/

// 当成员被标记成private时，它就不能在声明它的类的外部访问。
export class Animal {
    private name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}
// Property 'name' is private and only accessible within class 'Animal'.
// new Animal("Cat").name;

/**
 * Typescript使用的是结构性类型系统。
 * 当我们比较两种不同的类型时，并不在乎它们从何处而来，
 * 如果所有成员的类型都是兼容的，我们就认为它们的类型是兼容的。
 * 
 * 然而，当我们比较带有 private 或 protected 成员的类型的时候，情况就不同了。
 * 如果其中一个类型里包含一个 private 成员，
 * 并且它们都是来自同一处声明时，我们才认为这两个类型是兼容的。
 * 对于 protected 成员也是使用这个规则。
 */

class Rhino extends Animal {
    constructor() {
        super("Rhino");
    }
}

class Employee {
    private name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}

let animal = new Animal("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

// 类型相同
animal = rhino;
// Employee里也有一个私有成员 name，但明显不是Animal里面定义的那一个。
// animal = employee;

