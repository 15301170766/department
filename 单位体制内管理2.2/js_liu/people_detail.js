 // 基于准备好的dom，初始化echarts实例
        var myChart1 = echarts.init(document.getElementById('details_circle_p1'));
	var option1 = {
    backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
        offset: 0,
        color: '#f7f8fa'
    }, {
        offset: 1,
        color: '#cdd0d5'
    }]),
    title: {
        text: "客户详细信息",
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
        data: ['兴趣爱好', '出生地', '工作履历', '物流科技', '淘宝联盟', '阿里巴巴', '万达集团', '路流集团', '监测科技', '下属公司']
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
        name: '刘圆圆',
        type: 'graph',
        layout: 'force',

        force: {
            repulsion: 1500
        },
        data: [{
            "name": "刘圆圆",
            // "x": 0,
            // y: 0,
            "symbolSize": 50,
            "draggable": "true",
            "value": 27

        }, {
            "name": "兴趣爱好",
            "value": 15,
            "symbolSize": 50,
            "category": "兴趣爱好",
            "draggable": "true"
        }, {
            "name": "出生地",
            "value": 60,
            "symbolSize": 50,
            "category": "出生地",
            "draggable": "true"
        }, {
            "name": "工作履历",
            "value": 5,
            "symbolSize": 50,
            "category": "工作履历",
            "draggable": "true"
        }, {
            "name": "学习经历",
            "symbolSize": 50,
            "category": "工作履历",
            "draggable": "true",
            "value": 1
        }, {
            "name": "工作经历",
            "symbolSize": 50,
            "category": "工作履历",
            "draggable": "true",
            "value": 1
        }, {
            "name": "物流科技",
            "value": 40,
            "symbolSize": 50,
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
            "symbolSize": 50,
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
            "symbolSize": 50,
            "category": "阿里巴巴",
            "draggable": "true",
            "value": 1
        }, {
            "name": "万达集团",
            "value": 30,
            "symbolSize": 50,
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
            "source": "刘圆圆",
            "target": "兴趣爱好",
           'value': ' '
            
        }, {
            "source": "刘圆圆",
            "target": "出生地"
            , 'value': ' '
            
        }, {
            "source": "刘圆圆",
            "target": "工作履历"
            , 'value': ' '
            
        }, {
            "source": "工作履历",
            "target": "学习经历"
            , 'value': ' '
            
        }, {
            "source": "工作履历",
            "target": "工作经历"
            , 'value': ' '
            
        }, {
            "source": "刘圆圆",
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
            "source": "刘圆圆",
            "target": "淘宝联盟"
            , 'value': '投资人'
            
        }, {
            "source": "淘宝联盟",
            "target": "王xx"
            , 'value': '投资人'
            
        }, {
            "source": "刘圆圆",
            "target": "阿里巴巴"
            , 'value': '投资人'
            
        }, {
            "source": "阿里巴巴",
            "target": "赵xx"
            , 'value': '投资人'
            
        }, {
            "source": "刘圆圆",
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
            
        },  {
            "source": "淘宝联盟",
            "target": "曾xx"
            , 'value': '投资人'
            

        }],
        categories: [{
            'name': '兴趣爱好'
        }, {
            'name': '出生地'
        }, {
            'name': '工作履历'
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
        }],
        focusNodeAdjacency: true,
        roam: true,
        label: {
            normal: {

                show: true,
//              position: 'top',

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


 var myChart = echarts.init(document.getElementById('details_circle_p'));
	var option = {
    title: {
        text: ''
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    label: {
        normal: {
            show: true,
            textStyle: {
                fontSize: 12
            },
        }
    },
    legend: {
        x: "center",
        show: true,
        data: ["朋友", "战友", '亲戚']
    },
    series: [

        {
            type: 'graph',
            layout: 'force',
            symbolSize: 45,
            focusNodeAdjacency: true,
            roam: true,
            categories: [{
                name: '朋友',
                itemStyle: {
                    normal: {
                        color: "#009800",
                    }
                }
            }, {
                name: '战友',
                itemStyle: {
                    normal: {
                        color: "#4592FF",
                    }
                }
            }, {
                name: '亲戚',
                itemStyle: {
                    normal: {
                        color: "#3592F",
                    }
                }
            }],
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 12
                    },
                }
            },
            force: {
                repulsion: 1000
            },
            edgeSymbolSize: [4, 50],
            edgeLabel: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 10
                    },
                    formatter: "{c}"
                }
            },
            data: [{
                name: '徐贱云',
                draggable: true,
            }, {
                name: '冯可梁',
                category: 1,
                draggable: true,
            }, {
                name: '邓志荣',
                category: 1,
                draggable: true,
            }, {
                name: '李荣庆',
                category: 1,
                draggable: true,
            }, {
                name: '郑志勇',
                category: 1,
                draggable: true,
            }, {
                name: '赵英杰',
                category: 2,
                draggable: true,
            }, {
                name: '王承军',
                category: 2,
                draggable: true,
            }, {
                name: '陈卫东',
                category: 2,
                draggable: true,
            }, {
                name: '邹劲松',
                category: 2,
                draggable: true,
            }],
            links: [{
                source: 0,
                target: 1,
                value: '母子'
            }, {
                source: 0,
                target: 2,
                value: '父子'
          }
, {
                source: 0,
                target: 3,
                value: '兄妹'
            }
, {
                source: 0,
                target: 4,
                value: '兄弟'
            }
, {
                source: 1,
                target: 2,
                value: '夫妻'
           }, {
                source: 0,
                target: 5,
                value: '兄弟'
           }, {
                source: 5,
                target: 6,
                value: '兄弟'
           }, {
                source: 6,
                target: 7,
                value: '表亲'
           }, {
                source: 5,
                target: 8,
                value: '表亲'
           }, {
                source: 7,
                target: 8,
                value: '表亲'
           }, {
                source: 0,
                target: 9,
                value: '表亲'
           }, {
                source: 7,
                target: 8,
                value: '表亲'
           }
],
            lineStyle: {
                normal: {
                    opacity: 0.9,
                    width: 1,
                    curveness: 0
                }
            }
        }
    ]
};

myChart1.setOption(option1);
myChart.setOption(option);

$(".details_circle").hide();
$(".details_circle").eq(0).show();
$(".people_details .top button").on("click",function(){
	var index=$(this).index();
//	alert( index)
$(".details_circle").eq(index).show().siblings(".details_circle").hide();
})
