const express = require("express");
const app = express();
app.use(express.static("www"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(function (req, res, next) {
    // console.log("所有接口都会执行");
    next();
});
// table一系列和org 
app.use('/node1', require('./routes/node1'));
// demo一系列如echarts
app.use('/node2', require('./routes/node2'));

app.post("/login", function (req, res) {
    let data = {
        super_admin: {
            name: 'super_admin',
            user_id: '1',
            access: ['super_admin', 'admin'],
            token: 'super_admin',
            avatar: 'https://file.iviewui.com/dist/a0e88e83800f138b94d2414621bd9704.png'
        },
        admin: {
            name: 'admin',
            user_id: '2',
            access: ['admin'],
            token: 'admin',
            avatar: 'https://avatars0.githubusercontent.com/u/20942571?s=460&v=4'
        }
    }
    res.json(data[req.body.userName]);
});

app.post("/logout", function (req, res) {
    res.json({
        err: 0,
        msg: "退出登录！"
    });
});

app.listen(3000, function () {
    console.log("running...");
});