//引入express
const express = require('express');

//引入 express-async-errors
require('express-async-errors');

//实例化一个express 的实例
const app = express();

//引入抽离出去的路由文件
const postRouter = require('./routers/postRouter');
const userRouter = require('./routers/userRouter');

//req.body中间件处理
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//静态资源托管
app.use(express.static('/public'));

//调用路由文件，并设置好前缀
app.use('/post',postRouter);
app.use(userRouter);

//统一错误处理
app.use((err,req,res,next) => {
    //可以将错误信息写入某个文件中，方便后续去查看文件
    //fs  模块  fs.writeFile
    //   不能使用  fs.writeFile   使用fs.appendFile
    console.error(err);
    res.status(500).send(err.message);
})

//监听端口，启动服务
app.listen(3000, () => {
    console.log('服务启动成功');
})
