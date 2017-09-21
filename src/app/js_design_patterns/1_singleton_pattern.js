/**
 * @author Noah Sun
 * @email 
 * @create date 2017-09-21 11:12:27
 * @modify date 2017-09-21 11:12:27
 * @desc 单例模式。
 *       代码写在一个对象中，因此你也不需要去实例化一个新对象就可以在需要的时候直接使用它的资源
*/

const Singleton = {
    attr: 1,
    anoter_attr: 'value',
    method: function () { /* ... */ },
    another_method: function () { /* ... */ }
}

Singleton.attr = 2;
/* ... */
