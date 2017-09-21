/**
 * @author Noah Sun
 * @email 
 * @create date 2017-08-09 06:47:09
 * @modify date 2017-08-09 06:47:09
 * @desc 高级类型——字符串字面量类型
 * 字符串字面量类型允许你指定字符串必须的固定值
 * 在实际应用中，祝福传字面量类型可以与联合类型，类型保护和类型别名很好的配合。
*/

export { };

type Easing = "ease-in" | "ease-out" | "ease-in-out";
class UIElement {
    animate(dx: number, dy: number, easing: Easing) {
        if (easing === "ease-in") {

        } else if (easing === "ease-out") {

        } else if (easing === "ease-in-out") {

        } else {

        }
    }
}

const button = new UIElement();
button.animate(0, 0, "ease-in");

// 字符串字面量类型还可以用于区分函数重载
// declare function createElement(tagName: "img"): HTMLImageElement;
// declare function createElement(tagName: "input"): HTMLInputElement;

function createElement(tagName: string): HTMLElement {
    return document.createElement(tagName);
}
