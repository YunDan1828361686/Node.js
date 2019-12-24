let echarts1 = [
    {
        "title_text": "双Y刻度相同",
        "xAxis_data": [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月"
        ],
        "yAxis_series": [
            {
                "name": "注册",
                "type": "line",
                "data": [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]
            },
            {
                "name": "活跃",
                "type": "line",
                "yAxisIndex": 1,
                "data": [1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7, 8.8, 9.9, 10.1, 20.4, 30.5]
            }
        ]
    },
    {
        "title_text": "双Y刻度相同",
        "xAxis_data": [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月"
        ],
        "yAxis_series": [
            {
                "name": "注册",
                "type": "line",
                "data": [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]
            },
            {
                "name": "活跃",
                "type": "line",
                "yAxisIndex": 1,
                "data": [1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7, 8.8, 9.9, 10.1, 20.4, 30.5]
            }
        ]
    }
]

let echarts2 = {
}

module.exports = {
    echarts1,
    echarts2
}