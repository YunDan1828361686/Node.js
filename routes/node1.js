const express = require("express");
const router = express.Router();
router.use(function (req, res, next) {
    // console.log("node1下的都会执行");
    next();
});

// 定义数据
const { pagination1, pagination2, pagination3 } = require('../Json/table');

router.post("/table", function (req, res) {
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
router.post("/Upload", function (req, res) {
    res.json({
        code: 200,
        imgurl: "/img/logo.a027c628.jpg",
        imgname: "图片1"
    });
});
router.post("/org", function (req, res) {
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
module.exports = router;