/**
 * @author Noah Sun
 * @email 
 * @create date 2017-09-22 02:57:46
 * @modify date 2017-09-22 02:57:46
 * @desc 代理模式
 * 1.延迟一个大对象的实例化
 * 2.访问远程对象
 * 3.访问控制
*/

// 首先我们创建一个CarList的类，然后在创建一个代理类包装它
const CarList = function () { };
CarList.prototype = {
    getCar: function (...arg) { },
    search: function (...arg) { },
    addCar: function (...arg) { },
    /* ... */
};

const CarListProxy = function () {
    this.carList = new CarList();
}
CarListProxy.prototype = {
    getCar: function (...arg) {
        return this.carList.getCar(...arg);
    },
    search: function (...arg) {
        return this.carList.search(...arg);
    },
    addCar: function (...arg) {
        return this.carList.addCar(...arg);
    }
}

/**
 * //! 虚拟代理
 * 当一个对象非常庞大的时候，并且我们确实需要的时候再去实例化
 */

const CarListProxyOptimize = function () {
    this.carList = null;
}
CarListProxyOptimize.prototype = {
    // 其他方法在任何时候都可以调用这个方法，
    // 为的是在必要的时候才初始化CarList
    _init: function () {
        if (!this.carList) {
            this.carList = new CarList();
        }
    },

    getCar: function (...arg) {
        this._init();
        return this.carList.getCar(...arg);
    },
    search: function (...arg) {
        this._init();
        return this.carList.search(...arg);
    },
    addCar: function (...arg) {
        this._init();
        return this.carList.addCar(...arg);
    }

}

/**
 * //! 远程代理
 * 访问web服务器的API
 */

// 真正的CarList放在服务器上，因此CarListProxy是从服务器上获取数据的
const CarListProxyFromWeb = function () {
    this.requestUrl = '//www.someurl.com';
};
CarListProxyFromWeb.prototype = {
    getCar: function (...arg) {
        // 伪代码
        ajax(this.requestUrl + '/getCar', arg);
    },
    search: function (...arg) {
        // 伪代码
        ajax(this.requestUrl + '/search', arg);
    },
    addCar: function (...arg) {
        // 伪代码
        ajax(this.requestUrl + '/addCar', arg);
    }
};

/**
 * //! 对象访问控制
 * 为了真正控制访问，我们一定要确保除了用代理，而不能通过任何途径访问原始对象。
 * 所以我们会把它包裹在一个只调用的匿名函数里，但是要在window对象上挂载一个属性，
 * 这个属性就是我们的代理，它是外界访问这个对象的唯一路径。
 */

; (function () {
    const CarList = function () { };
    const CarListProxy = function () {
        this.carList = null;
        this.date = new Date();
    }
    CarListProxy.prototype = {
        _initIfTime: function () {
            if (this._isTime() && !this.carList) {
                this.carList = new CarList();
                return true;
            }
            return false;
        },
        // 检查是否已经到了指定日期
        _isTime: function () {
            return this.date > new Date('2017年9月22日 17点27分');
        },
        getCar: function (...arg) {
            return this._initIfTime() && this.carList.getCar(...arg);
        },
        search: function (...arg) {
            return this._initIfTime() && this.carList.search(...arg);
        },
        addCar: function (...arg) {
            return this._initIfTime() && this.carList.addCar(...arg);
        }
    }

    window.CarListProxy = CarListProxy;
    // 或
    window.CarList = CarListProxy;
}());
