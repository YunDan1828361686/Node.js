const express = require("express");
const router = express.Router();
router.use(function (req, res, next) {
    // console.log("node2下的都会执行");
    next();
});
router.post("/echarts", function (req, res) {
    res.json({
        code: 0,
        msg: "请求成功!",
        data: [
            {
                title: "BBU1",
                xAxis: [
                    "测试1",
                    "测试2",
                    "测试3",
                    "测试4",
                    "测试5",
                    "测试6",
                    "测试7",
                    "测试8",
                    "测试9",
                    "测试10",
                    "测试11",
                    "测试12",
                    "测试13",
                    "测试14",
                    "测试15"
                ],
                yAxis: [{
                    name: "电量1",
                    type: "line",
                    color: "#2d8cf0",
                    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
                },
                {
                    name: "电量2",
                    type: "line",
                    color: "#2d8cf0",
                    data: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
                },
                {
                    name: "电量3",
                    type: "line",
                    color: "#2d8cf0",
                    data: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
                }],
                RRUname: ["RRU1", "RRU2", "RRU3"]
            },
            {
                title: "BBU2",
                xAxis: [
                    "测试1",
                    "测试2",
                    "测试3",
                    "测试4",
                    "测试5",
                    "测试6",
                    "测试7",
                    "测试8",
                    "测试9",
                    "测试10",
                    "测试11",
                    "测试12",
                    "测试13",
                    "测试14",
                    "测试15"
                ],
                yAxis: [{
                    name: "电量1",
                    type: "line",
                    color: "#2d8cf0",
                    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
                },
                {
                    name: "电量2",
                    type: "line",
                    color: "#2d8cf0",
                    data: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
                },
                {
                    name: "电量3",
                    type: "line",
                    color: "#2d8cf0",
                    data: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
                }],
                RRUname: ["RRU1", "RRU2", "RRU3"]
            }
        ]
    });
});

module.exports = router;