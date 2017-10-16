/**
 * @author Noah Sun
 * @email 
 * @create date 2017-10-16 02:43:00
 * @modify date 2017-10-16 02:43:00
 * @desc 适配器模式
 *  适配器就像一台接口转换机一样。
 *  不过它并非完全改变一个接口，它只是创建一个新的对象或函数，
 *  去适配现有的对象或函数的接口，去兼容我们已经在使用的代码。
*/

const AjaxLogger = {
    sendLog: function () {
        const data = this.urlEncode(arguments);

        jQuery.ajax({
            url: "http://example.com/log",
            data: data
        });
    },

    urlEncode: function (arg) {
        // ...
        return encodedData;
    },
    // ...
};
