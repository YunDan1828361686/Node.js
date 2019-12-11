const express = require("express");
const app = express();
app.use(express.static("www"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 定义数据
const { pagination1, pagination2, pagination3 } = require('./Json/table');

app.post("/node/table", function (req, res) {
    if (req.body.page_current == 1 || req.body.page_current == "") {
        if (req.body.page_size == 20) {
            res.json(pagination3);
        } else {
            res.json(pagination1);
        }
    } else if (req.body.page_current == 2) {
        res.json(pagination2);
    }
});
app.post("/node/org", function (req, res) {
    res.json({
        id: 0,
        label: 'XXX科技有限公司',
        children: [
            {
                id: 2,
                label: '产品研发部',
                children: [
                    {
                        id: 5,
                        label: '研发-前端'
                    }, {
                        id: 6,
                        label: '研发-后端'
                    }, {
                        id: 9,
                        label: 'UI设计'
                    }, {
                        id: 10,
                        label: '产品经理'
                    }
                ]
            },
            {
                id: 3,
                label: '销售部',
                children: [
                    {
                        id: 7,
                        label: '销售一部'
                    }, {
                        id: 8,
                        label: '销售二部'
                    }
                ]
            },
            {
                id: 4,
                label: '财务部'
            }, {
                id: 11,
                label: 'HR人事'
            }
        ]
    });
});
app.post("/logout", function (req, res) {
    res.json({
        err: 0,
        msg: "退出登录！"
    });
});
app.post("/node/echarts", function (req, res) {
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



app.listen(3000, function () {
    console.log("running...");
});