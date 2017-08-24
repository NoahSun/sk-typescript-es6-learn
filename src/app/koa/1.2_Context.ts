import * as Koa from "koa"
const app = new Koa();

/**
 * 
 * @param ctx 
 * Koa提供的一个Context对象，表示一次对话的上下文
 * (包括HTTP请求和HTTP回复)
 * 通过加工这个对象，就可以控制返回给用户的内容
 */
const main = ctx => {
    ctx.response.body = 'Hello Koa';
    console.log(JSON.stringify(ctx, null, 4));
}

app.use(main);
app.listen(3000);