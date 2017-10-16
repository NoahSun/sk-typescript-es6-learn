/**
 * @author Noah Sun
 * @email 
 * @create date 2017-10-16 12:27:09
 * @modify date 2017-10-16 12:27:09
 * @desc 外观模式
 * 把一堆复杂接口定义成一小段代码。最主要的目的就是为了兼容个平台的不同写法
*/

function addEvent(element, type, func) {
    if (window.addEventListener) {
        element.addEventListener(type, func, false);
    }
    else if (window.attachEvent) {
        element.attachEvent('on' + type, func);
    }
    else {
        element['on' + type] = func;
    }
}

// 太蹩脚，太多重复代码
var foo = document.getElementById('foo');
foo.style.color = 'red';
foo.style.width = '150px';

var bar = document.getElementById('bar');
bar.style.color = 'red';
bar.style.width = '150px';

var baz = document.getElementById('baz');
baz.style.color = 'red';
baz.style.width = '150px';

function setStyle(elements, property, value) {
    for (var i = 0, length = elements.length; i < length; i++) {
        document.getElementById(elements[i]).style[property] = value;
    }
}

// 现在你可以这么写：
setStyle(['foo', 'bar', 'baz'], 'color', 'red');
setStyle(['foo', 'bar', 'baz'], 'width', '150px');

// 还能够一次设置所有的样式
function setStyles(elements, styles) {
    for (var i = 0, length = elements.length; i < length; i++) {
        var element = document.getElementById(elements[i]);

        for (var property in styles) {
            element.style[property] = styles[property];
        }
    }
}

//现在你只要这样写：
setStyles(['foo', 'bar', 'baz'], {
    color: 'red',
    width: '150px'
});