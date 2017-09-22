/**
 * @author Noah Sun
 * @email 
 * @create date 2017-09-22 05:44:15
 * @modify date 2017-09-22 05:44:15
 * @desc 观察者模式
 * 观察者（observer），可观察者（observable）
 * 观察者有两个基本法夯实可以操作数据push，pull
 * push：一旦发生变化，发布者会立即触发订阅者的事件
 * pull：只要订阅者觉得有必要，随时都可以检查发布者的变化
*/

const Observable = function () {
    this.subscribers = [];
}
Observable.prototype = {
    subscribe: function (callback) {
        // 大多数情况下，你会想要检查订阅者数组里是否已经存在这个回调函数（callback）了
        // 不过我们现在没有必要关注旁枝末节的东西
        this.subscribers.push(callback);
    },
    unsubscribe: function (callback) {
        let i = 0;
        const l = this.subscribers.length;
        // 遍历数组，如果找到这个回调函数（callback），就删掉它。
        for (; i < l; i++) {
            if (this.subscribers[i] === callback) {
                this.subscribers.splice(i, 1);
                return;
            }
        }
    },
    publish: function (data) {
        let i = 0;
        const l = this.subscribers.length;
        for (; i < l; i++) {
            this.subscribers[i](data);
        }
    }
};

const Observer = function (data) {
    console.log('接收消息： ' + data);
}
const Observer1 = function (data) {
    console.log('接收消息1： ' + data);
}

const observable = new Observable();
observable.subscribe(Observer);
observable.subscribe(Observer1);
observable.publish('推送的消息');
