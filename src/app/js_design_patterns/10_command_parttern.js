/**
 * @author Noah Sun
 * @email 
 * @create date 2017-09-28 12:00:02
 * @modify date 2017-09-28 12:00:02
 * @desc 命令模式
 * 命令模式会作为一个 ”方法实现对象“ 和一个 ”方法调用对象“ 中间的抽象层
*/

const EnableAlarm = function (alarm) {
    this.alarm = alarm;
}
EnableAlarm.prototype.execute = function () {
    this.alarm.enable();
}

const DisableAlarm = function (alarm) {
    this.alarm = alarm;
}
DisableAlarm.prototype.execute = function () {
    this.alarm.disable();
}

const ResetAlarm = function (alarm) {
    this.alarm = alarm;
}
ResetAlarm.prototype.execute = function () {
    this.alarm.reset();
}

const SetAlarm = function (alarm) {
    this.alarm = alarm;
}
SetAlarm.prototype.execute = function () {
    this.alarm.set();
}

/**
 * 注意每个命令对象只关注一个接口。在这个例子里，每个接口自定义了一个方法，
 * 每个方法本身只调用一个函数。在这种情况下，你可能会忽略正在做的事情，
 * 只是使用这些回调函数，本质上其实就是使用命令对象本身。在这个例子中你当然
 * 还是用的命令模式，只是你自己不知道，因为它们全都被当做回调函数来用。
 */

//  使用这些命令对象
// 接收者（alarms，alarms[i] ）
const alarms = [/* 闹钟列表 */],
    len = alarms.length;
let i = 0;
// 委托者（for循环体）
for (; i < len; i++) {
    const enable_alarm = new EnableAlarm(alarms[i]),
        disable_alarm = new DisableAlarm(alarms[i]),
        reset_alarm = new ResetAlarm(alarms[i]),
        set_alarm = new SetAlarm(alarms[i]);
    
    // UI对象，当按钮被点击时就执行传入的命令对象上的execute方法
    // 调用者（new Button）
    new Button('enable', enable_alarm);
    new Button('disable', disable_alarm);
    new Button('reset', reset_alarm);
    new Button('set', set_alarm);
}

/**
 * 命令模式的4个部分
 * 1.命令对象：可执行某个命令的对象
 * 2.委托者：创建命令对象并把它传递给调用者的那段代码
 * 3.调用者：使用这个命令对象并调用它的那个对象
 * 4.接收者：被调用方法所在的对象
 */

// 如果你想在命令对象和回调函数间做妥协的话，参照下面的例子
const makeEnableCommand = function (alarm) {
    return function() {
        alarm.enable();
    }
}

const makeDisableCommand = function (alarm) {
    return function() {
        alarm.disable();
    }
}

const makeResetCommand = function (alarm) {
    return function() {
        alarm.reset();
    }
}

const makeSetCommand = function (alarm) {
    return function() {
        alarm.set();
    }
}