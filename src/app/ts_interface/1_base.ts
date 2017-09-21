/**
 * @author Noah Sun
 * @email 
 * @create date 2017-07-24 06:11:13
 * @modify date 2017-07-24 06:11:13
 * @desc 接口——初探
*/

export function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}

const myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

// 使用接口来描述
interface LabelledValue {
    label: string;
}

function printLabel1(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

const myObj1 = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
