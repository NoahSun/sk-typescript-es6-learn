/**
 * @author Noah Sun
 * @email 
 * @create date 2017-07-14 06:38:52
 * @modify date 2017-07-14 06:38:52
 * @desc 使用co中间件
*/

import co = require('co');

const tick = (time) => (done) => {
    setTimeout(() => {
        done(null, time);
    }, time);
}


