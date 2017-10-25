import * as fs from 'fs';
import * as Koa from 'koa';
const app = new Koa();

const main: Koa.Middleware = ctx => {
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream(__dirname + '/template.html');
};

app.use(main);
app.listen(3000);
