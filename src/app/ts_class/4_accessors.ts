/**
 * @author Noah Sun
 * @email 
 * @create date 2017-07-28 12:10:42
 * @modify date 2017-07-28 12:10:42
 * @desc 类——存取器
 * 注意：
 *       1.存取器要求ts编译器设置输出目标为ES5或更高。不支持降级到ES3。
 *       2.只带有get不带有set的存取器自动判断为readonly。
*/

export let passcode = "secret passcode";

class Employee {
    private _fullname: string;
    get fullname(): string {
        return this._fullname;
    }
    set fullname(newName: string) {
        if (!newName) {
            throw new Error("Error: newName is empty!");
        }
        if (passcode && passcode === "secret passcode") {
            this._fullname = newName;
            console.log("object");
        } else {
            throw new Error("Error: Unauthorized update of employee!");
        }
    }
}

const employee = new Employee();
employee.fullname = "";
