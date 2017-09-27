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

const ObservableTest = function () {
    this.subscribers = [];
}
ObservableTest.prototype = {
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

// 订阅者只是一个被当作回调的函数
const Observer1 = function (data) {
    console.log('接收消息： ' + data);
}
const Observer2 = function (data) {
    console.log('接收消息1： ' + data);
}

const observableTest = new ObservableTest();
observableTest.subscribe(Observer1);
observableTest.subscribe(Observer2);
observableTest.publish('推送的消息');

// Observable本身可以作为一个类来用，所以其他对象可以通过继承来变成发布者

// pull方式。更多的用在信息交换的场合
const Observable = function () {
    this.status = "constructed";
}
Observable.prototype = {
    getStatus: function () {
        return this.status;
    }
};

const Observer = function () {
    this.subscriptions = [];
    this.len = 0;
}
Observer.prototype = {
    subscribeTo: function (observable) {
        this.len = this.subscriptions.push(observable);
    },
    unsubscribeFrom: function () {
        let i = 0;
        const len = this.len;
        for (; i < len; i++) {
            if (this.subscriptions[i] === observable) {
                // 找到订阅的对象删除，并立即返回
                this.subscriptions.splice(i, 1);
                return;
            }
        }
    },
    doSomethingIfOk: function () {
        let i = 0;
        const len = this.len;
        // 便利subscriptions，确定每个元素的状态是否变成了ok
        // 如果是ok的话就处理
        for (; i < len; i++) {
            if (this.subscriptions[i].getStatus() === 'ok') {
                // do something
                console.log('done');
            }
        }
    }
}

const observer = new Observer();
const observable = new Observable();
observer.subscribeTo(observable);

// 因为状态没有变成ok，所以什么都不会发生
observer.doSomethingIfOk();

// 把状态变为ok，就会进行处理
observable.status = 'ok';
observer.doSomethingIfOk();

