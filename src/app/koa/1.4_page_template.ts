import * as Koa from 'koa';
import * as fs from 'fs';
const app = new Koa();

const main: Koa.Middleware = ctx => {
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream(__dirname + '/template.html');
}

app.use(main);
app.listen(3000);