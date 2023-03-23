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
        admin: {
            name: 'admin',
            user_id: '1',
            access: ['super_admin', 'admin'],
            token: 'admin',
            avatar: 'https://file.iviewui.com/dist/a0e88e83800f138b94d2414621bd9704.png'
        },
        system: {
            name: 'system',
            user_id: '2',
            access: ['admin'],
            token: 'system',
            avatar: 'https://avatars0.githubusercontent.com/u/20942571?s=460&v=4'
        }
    }
    res.json(data[req.body.username]);
});
app.post("/getmenu", function (req, res) {
    if (req.body.userId == '1') {
        res.json([
            {
                path: "/Test",
                name: "Test",
                meta: {
                    title: 'Test'
                },
                component: "Main",
                children: [
                    {
                        path: "/Test1",
                        name: "Test1",
                        meta: {
                            icon: "_buju",
                            title: "测试1",
                        },
                        component:
                            "/Test1.vue",
                    },
                    {
                        path: "/Test2",
                        name: "Test2",
                        meta: {
                            icon: "_buju",
                            title: "测试2",
                            // hideInMenu: true,
                        },
                        component:
                            "/Test2.vue",
                    },
                    {
                        path: "/Test3",
                        name: "Test3",
                        meta: {
                            icon: "_buju",
                            title: "测试3",
                        },
                        component:
                            "/Test3.vue",
                    },
                ],
            },
        ]);
    } else {
        res.json([
            {
                path: "/Test",
                name: "Test",
                meta: {
                    title: 'Test'
                },
                component: "Main",
                children: [
                    {
                        path: "/Test3",
                        name: "Test3",
                        meta: {
                            icon: "_buju",
                            title: "测试3",
                        },
                        component:
                            "/Test3.vue",
                    },
                    {
                        path: "/Test4",
                        name: "Test4",
                        meta: {
                            title: "测试4",
                            hideInMenu: true,
                        },
                        component:
                            "/Test4.vue",
                    },
                ],
            },
        ]);
    }
});
app.post("/logout", function (req, res) {
    res.json({
        code: 0,
        msg: "退出登录！"
    });
});
app.post("/ifInline", function (req, res) {
    res.json({
        code: 0,
        msg: "服务器在线！"
    });
});

app.listen(3000, function () {
    console.log("running...");
});