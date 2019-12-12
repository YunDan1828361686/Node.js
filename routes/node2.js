const express = require("express");
const router = express.Router();
router.use(function (req, res, next) {
    // console.log("node2下的都会执行");
    next();
});

// 定义数据
const { echarts1, echarts2 } = require('../Json/echarts');

router.post("/echarts", function (req, res) {
    res.json({
        code: 0,
        msg: "请求成功!",
        data: echarts1
    });
});


router.post("/test1", function (req, res) {
    res.json({
        code: 0,
        msg: "请求成功!",
        data: "111"
    });
});

router.post("/test2", function (req, res) {
    res.json({
        code: 0,
        msg: "请求成功!",
        data: "222"
    });
});

module.exports = router;