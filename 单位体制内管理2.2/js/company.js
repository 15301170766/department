 // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('details_circle_c'));
	option = {
    backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
        offset: 0,
        color: '#f7f8fa'
    }, {
        offset: 1,
        color: '#cdd0d5'
    }]),
    title: {
        text: "单位详细信息",
//      subtext: "ZBH",
        top: "top",
        left: "center"
    },
    tooltip: {},
    legend: [{
        formatter: function(name) {
            return echarts.format.truncateText(name, 40, '14px Microsoft Yahei', '…');
        },
        tooltip: {
            show: true
        },
        selectedMode: 'false',
        top: 20,
        data: ['内部架构', '单位简介', '核心客户', '物流科技', '淘宝联盟', '阿里巴巴', '万达集团', '路流集团', '监测科技', '下属公司']
    }],
    toolbox: {
        show: true,
        feature: {
            dataView: {
                show: true,
                readOnly: true
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    animationDuration: 3000,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        name: '和舆图',
        type: 'graph',
        layout: 'force',

        force: {
            repulsion: 1500
        },
        data: [{
            "name": "和舆图",
            // "x": 0,
            // y: 0,
            "symbolSize": 80,
            "draggable": "true",
            "value": 27

        }, {
            "name": "内部架构",
            "value": 15,
            "symbolSize": 50,
            "category": "内部架构",
            "draggable": "true"
        }, {
            "name": "单位简介",
            "value": 60,
            "symbolSize": 50,
            "category": "单位简介",
            "draggable": "true"
        }, {
            "name": "核心客户",
            "value": 5,
            "symbolSize": 50,
            "category": "核心客户",
            "draggable": "true"
        }, {
            "name": "马云",
            "symbolSize": 50,
            "category": "核心客户",
            "draggable": "true",
            "value": 1
        }, {
            "name": "刘强东",
            "symbolSize": 7,
            "category": "核心客户",
            "draggable": "true",
            "value": 1
        }, {
            "name": "物流科技",
            "value": 40,
            "symbolSize": 80,
            "category": "物流科技",
            "draggable": "true"
        }, {
            "name": "刘xx",
            "symbolSize": 50,
            "category": "物流科技",
            "draggable": "true",
            "value": 1
        }, {
            "name": "李xx",
            "symbolSize": 50,
            "category": "物流科技",
            "draggable": "true",
            "value": 1
        }, {
            "name": "淘宝联盟",
            "value": 8,
            "symbolSize": 50,
            "category": "淘宝联盟",
            "draggable": "true"
        }, {
            "name": "王xx",
            "symbolSize": 5,
            "category": "淘宝联盟",
            "draggable": "true",
            "value": 1
        }, {
            "name": "赵xx",
            "value": 5,
            "symbolSize": 50,
            "category": "阿里巴巴",
            "draggable": "true"
        }, {
            "name": "阿里巴巴",
            "symbolSize": 80,
            "category": "阿里巴巴",
            "draggable": "true",
            "value": 1
        }, {
            "name": "万达集团",
            "value": 30,
            "symbolSize": 80,
            "category": "万达集团",
            "draggable": "true"
        }, {
            "name": "仲谋",
            "symbolSize": 50,
            "category": "万达集团",
            "draggable": "true",
            "value": 1
        }, {
            "name": "吴侯",
            "symbolSize": 50,
            "category": "万达集团",
            "draggable": "true",
            "value": 1
        }, {
            "name": "下属公司",
            "value": 6,
            "symbolSize": 50,
            "category": "下属公司",
            "draggable": "true"
        }, {
            "name": "曾xx",
            "symbolSize": 50,
            "category": "下属公司",
            "draggable": "true",
            "value": 1

        }],
        links: [{
            "source": "和舆图",
            "target": "内部架构",
           'value': '投资人'
            
        }, {
            "source": "和舆图",
            "target": "单位简介"
            , 'value': '投资人'
            
        }, {
            "source": "单位简介",
            "target": "孔明1643"
            , 'value': '详细'
            
        }, {
            "source": "和舆图",
            "target": "核心客户"
            , 'value': '投资人'
            
        }, {
            "source": "核心客户",
            "target": "马云"
            , 'value': '投资人'
            
        }, {
            "source": "核心客户",
            "target": "刘强东"
            , 'value': '投资人'
            
        }, {
            "source": "和舆图",
            "target": "物流科技"
            , 'value': '投资人'
            
        }, {
            "source": "物流科技",
            "target": "李xx"
            , 'value': '投资人'
            
        }, {
            "source": "物流科技",
            "target": "刘xx"
            , 'value': '投资人'
            
        }, {
            "source": "和舆图",
            "target": "淘宝联盟"
            , 'value': '投资人'
            
        }, {
            "source": "淘宝联盟",
            "target": "王xx"
            , 'value': '投资人'
            
        }, {
            "source": "和舆图",
            "target": "阿里巴巴"
            , 'value': '投资人'
            
        }, {
            "source": "阿里巴巴",
            "target": "赵xx"
            , 'value': '投资人'
            
        }, {
            "source": "和舆图",
            "target": "万达集团"
            , 'value': '投资人'
            
        }, {
            "source": "万达集团",
            "target": "仲谋"
            , 'value': '投资人'
            
        }, {
            "source": "万达集团",
            "target": "吴侯"
            , 'value': '投资人'
            
        },{
            "source": "和舆图",
            "target": "下属公司"
            , 'value': '投资人'
            
        }, {
            "source": "下属公司",
            "target": "文长"
            , 'value': '投资人'
            
        }, {
            "source": "淘宝联盟",
            "target": "曾xx"
            , 'value': '投资人'
            

        }],
        categories: [{
            'name': '内部架构'
        }, {
            'name': '单位简介'
        }, {
            'name': '核心客户'
        }, {
            'name': '物流科技'
        }, {
            'name': '淘宝联盟'
        }, {
            'name': '阿里巴巴'
        }, {
            'name': '万达集团'
        },  {
            'name': '监测科技'
        }, {
            'name': '下属公司'
        }, {

        }],
        focusNodeAdjacency: true,
        roam: true,
        label: {
            normal: {

                show: true,
                position: 'top',

            }
        },
         edgeLabel: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 10
                    },
                    formatter: "{c}"
                }
            },
        lineStyle: {
            normal: {
                color: 'source',
                curveness: 0,
                type: "solid"
            }
        }
    }]
};
myChart.setOption(option);