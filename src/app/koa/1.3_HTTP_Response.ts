import * as Koa from 'koa';
const app = new Koa();
/**
 * Koa默认返回类型是text/plain，如果想返回其他类型的内容，
 * 可以先用ctx.request.accepts判断一下客户端希望接收的数据类型（根据HTTP Request的Accept字段），
 * 然后使用ctx.response.type指定返回类型
 */
const main: Koa.Middleware = ctx => {
    if (ctx.request.accepts('xml')) {
        ctx.response.type = 'xml';
        ctx.response.body = '<data>Hello Koa - xml</data>'
    } else if (ctx.request.accepts('json')) {
        ctx.response.type = 'json';
        ctx.response.body = { data: 'Hello Koa - json' };
    } else if (ctx.request.accepts('html')) {
        ctx.response.type = 'html';
        ctx.response.body = '<p>Hello Koa -html</p>';
    } else {
        ctx.response.type = 'text';
        ctx.response.body = 'Hello World';
    }
}

app.use(main);
app.listen(3000);