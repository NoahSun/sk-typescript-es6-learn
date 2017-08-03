/**
 * @author Noah Sun
 * @email 
 * @create date 2017-08-02 03:30:56
 * @modify date 2017-08-02 03:30:56
 * @desc for...of语句
 *       for...of会遍历可迭代的对象，调用对象上的Symbol.iterator方法。
*/

let someArray = [1, "string", false];
let myStr = "abcdefghijklmnopqrstuvwxyz";
let pets = new Set(["Cat", "Dog", "Hamster"]);
pets["species"] = "mammals";

for (let entry of someArray) {
    // console.log(entry);
}

for (let char of myStr) {
    // console.log(char);
}

for (let pet in pets) {
    console.log(pet);
}

// 当生成目标为ES5或ES3，迭代器只允许在Array类型上使用。（生成目标只有在es2015或更高时才可使用for...of对非Array的其他迭代对象进行迭代）
// 在非数组值上使用for...of语句会得到一个错误，就算这些非数组值实现了Symbol.iterator属性。
// Error: pets 不是Array类型
/* for (let pet of pets) {
    console.log(pet);
} */
