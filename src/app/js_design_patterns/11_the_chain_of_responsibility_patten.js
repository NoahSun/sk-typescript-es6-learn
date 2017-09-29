/**
 * @author Noah Sun
 * @email 
 * @create date 2017-09-29 11:57:56
 * @modify date 2017-09-29 11:57:56
 * @desc 责任链模式
 *  这个模式会解耦一个请求的 发送者（seader） 和 接收者（receiver）
 *  这是通过一个对象链完成的，每一个对象本身都可以处理这个请求或将其传递到下一个对象
*/

/**
 * //* 责任链结构
 * 责任链模式有三个部分:发送者(sender),接收者(receiver),请求(request)
 * 发送者会创建请求
 * 接收者是一个或多个对象组成的对象链,这些对象会选择处理这个请求,或是把它传递下去
 * 请求本身可以是一个对象,它封装了所有相关的数据
 * 
 * 一个发送者发送一个请求给对象链里的第一个接收者.
 * 发送者只知道第一个接收者对象,并不知道其他的.
 * 第一个接收者处理这个请求并且(或者)把它传给链路的下一个.在这条链路上每一个接收者只知道下一个接收者是谁.
 * 请求会顺着链路一直传递下去直到被处理,或者没有接收者再可传递.
 * 至此,要么什么也不会发生,要么就抛出一个错误.
 */

// 示例
/**
 * ATM取钱
 * 取钱的时候机器先吐大面值钞票,再吐小面值钞票
 */

// 接收者类:MoneyStack.通常它只是个抽象类或者是一个接口,再通过继承呵实现来创建多个不同的接收者.

const MoneyStack = function (billSize) {
    this.billSize = billSize; //钞票面值
    this.next = null;
}
MoneyStack.prototype = {
    withdraw: function (amount) { //提现方法
        const numOfBills = Math.floor(amount / this.billSize);
        if (numOfBills > 0) {
            // 吐钞
            this._ejectMoney(numOfBills);
            // 减去已吐钞票
            amount = amount - (this.billSize * numOfBills);
        }

        // 是否还有钱没有取出,如果链路上还有别的面值的钞票,把请求传递下去
        amount > 0 && this.next && this.next.withdraw(amount);
    },
    // 设置链路上下一个面值的钞票
    setNextStack: function (stack) {
        this.next = stack;
    },
    // 私有的用来吐钞的方法
    _ejectMoney: function (numOfBills) {
        // 多少张billSize面值的钞票已经吐出来
        console.log(numOfBills + '张 $' + this.billSize);
    }
}

const ATM = function () {
    // 创建不同面值的钱
    const stack100 = new MoneyStack(100),
        stack50 = new MoneyStack(50),
        stack20 = new MoneyStack(20),
        stack10 = new MoneyStack(10),
        stack5 = new MoneyStack(5),
        stack1 = new MoneyStack(1);

    // 钞票层级顺序
    stack100.setNextStack(stack50);
    stack50.setNextStack(stack20);
    stack20.setNextStack(stack10);
    stack10.setNextStack(stack5);
    stack5.setNextStack(stack1);

    // 把顶层钞票设置为一个属性
    this.moneyStacks = stack100;
}

ATM.prototype.withdraw = function (amount) {
    this.moneyStacks.withdraw(amount);
}

// 用法
const atm = new ATM();
atm.withdraw(186);
/* 输出:
    1张 $100 已经吐钞
    1张 $50 已经吐钞
    1张 $20 已经吐钞
    1张 $10 已经吐钞
    1张 $5 已经吐钞
    1张 $1 已经吐钞
*/
atm.withdraw(72);
/* 输出:
    1张 $50 已经吐钞
    1张 $20 已经吐钞
    2张 $1 已经吐钞
*/
