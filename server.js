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

app.post("/logout", function (req, res) {
    res.json({
        err: 0,
        msg: "退出登录！"
    });
});

app.listen(3000, function () {
    console.log("running...");
});