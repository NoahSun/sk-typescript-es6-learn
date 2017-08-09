/**
 * @author Noah Sun
 * @email 
 * @create date 2017-08-07 11:00:46
 * @modify date 2017-08-07 11:00:46
 * @desc 高级类型——联合类型
 * 使用竖线（ | ）分隔每个类型
*/

// 基本类型的联合
export function padLeft(value: string, padding: string | number) {
    if (typeof padding === "number") {
        return Array(padding + 1).join("") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, got ${padding}`);
}

console.log(padLeft("Hello world", "some, "));

// 接口类型的联合
interface Bird {
    fly();
    layEggs();
}

interface Fish {
    swim();
    layEggs();
}

interface Snake {
    crawl();
    layEggs();
}

type Pet = Bird | Fish | Snake;

function getSmallPet(): Pet {
    return {
        swim() { },
        layEggs() { }
    }
}

// 联合类型中，我们只能够访问共同拥有的成员
let pet = getSmallPet();
pet.layEggs();

// 使用类型断言，区分类型
if ((<Fish>pet).swim) {
    (<Fish>pet).swim();
} else {
    (<Bird>pet).fly();
}

// 用户自定义的类型保护
// 返回一个boolean值
function isFish(pet: Pet): pet is Fish {
    //                              ^^^^^^^^^^^
    //                                类型谓词
    return (<Fish>pet).swim !== undefined;
}

function isBird(pet: Pet): pet is Bird {
    return (<Bird>pet).fly !== undefined;
}

function isSnake(pet: Pet): pet is Snake {
    return (<Snake>pet).crawl !== undefined;
}

// 在调用isFish时，ts将变量缩减为具体的类型
if (isFish(pet)) {
    pet.swim();
} else if (isBird(pet)) {
    pet.fly();
} else {
    pet.crawl();
    // 当剩下的类型还有多个时，并且没有使用类型缩减的方法，同样只会提示共同拥有的成员
    // (<Snake>pet).crawl();
    // (<Bird>pet).fly()
}
