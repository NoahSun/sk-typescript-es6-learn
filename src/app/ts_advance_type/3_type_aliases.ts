/**
 * @author Noah Sun
 * @email 
 * @create date 2017-08-09 05:28:14
 * @modify date 2017-08-09 05:28:14
 * @desc 高级类型——类型别名
 * 类型别名会给一个类型起新的名字。
 * 类型别名有时和接口很像，但是可以作用于原始值，联合类型，元组以及其他任何你需要手写的类型
*/

export { }

type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    } else {
        return n();
    }
}

// 同接口（interface）一样，类型别名（type）也可以是泛型
// 我们可以添加类型参数并且在别名声明的右侧传入
type Container<T> = { value: T };
// 我们也可以使用类型别名来在属性里面引用自己
type Tree<T> = {
    value: T,
    left: Tree<T>;
    right: Tree<T>
}

// 与交叉类型一起使用，我们可以创建出一些十分稀奇古怪的类型。
type LinkedList<T> = T & { next: LinkedList<T> };
interface Person {
    name: string;
}
var people: LinkedList<Person> = <LinkedList<Person>>{};
var s = people.name;
var s = people.next.next.name;
var s = people.next.next.next.next.next.name // ...next...

// 然而类型别名不能循环引用
// type Yikes = Array<Yikes> //Error!


// 接口 vs. 类型别名
type Alias = { num: number };
interface Interface {
    num: number;
}

declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;

// 另一个重要区别是类型别名不能被 extends 和 implements（自己也不能 extends 和implements 其他类型）
// 尽量使用接口代替类型别名
// 另一方面，如果你无法通过接口来描述一个类型并且需要使用联合类型或元组类型，这时通常会使用类型别名。
