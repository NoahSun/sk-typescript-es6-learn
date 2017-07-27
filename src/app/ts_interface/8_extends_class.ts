/**
 * @author Noah Sun
 * @email 
 * @create date 2017-07-27 12:24:45
 * @modify date 2017-07-27 12:24:45
 * @desc 接口——继承类
 * 当接口继承了一个类类型时，它会继承类的成员但不包括其实现。
 * 就好像接口声明了所有类中存在的成员，但没有提供具体实现一样。
 * 接口同样会继承到类的private和protected成员。
 * 这意味着当你创建了一个接口继承了一个拥有private或protected的成员类时，
 * 这个接口类型只能被这个 “类” 或 “其子类” 所实现（implement）。
 * 
 * 子类除了继承至基类外与基类没有任何关系
*/

export class Control implements SelectableControl {
    private state: any;
    select() { }
}

// ↑↓ SelectableControl包含了Control的所有成员，包括私有成员state。 
//    因为state是私有成员，所以只能够是Control的子类们才能实现SelectableControl接口。
//    因为只有Control的子类才能够拥有一个声明于Control的私有成员state，这对私有成员的兼容性是必需的。

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control {
    select() { }
}

class Input {
    select() { }
}
