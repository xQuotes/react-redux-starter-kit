import * as React from 'react'
import ReactEcharts from 'echarts-for-react'
import 'echarts/map/js/china.js'

export default class EchartsComponent extends React.Component<any, {}> {
  constructor(props: {}) {
    super(props)
    this.state = {
      echarts: null
    }
  }
  getOption() {
    const option = {
      title: {
        text: '',
        subtext: ''
      },
      tooltip: {
        show: true,
        formatter: function(params: { value: string; name: string }) {
          if (params.value) {
            return params.name + '<br />' + params.value + '个'
          } else {
            return null
          }
        }
      },
      visualMap: {
        type: 'piecewise',
        pieces: [
          {
            gt: 150
          },
          {
            gt: 90,
            lte: 150
          },
          {
            gt: 51,
            lte: 100
          },
          {
            gt: 20,
            lte: 50,
            label: '10 - 20（全国平均值）'
          },
          {
            gt: 10,
            lte: 20
          },
          {
            value: 50,
            label: '123（自定义特殊颜色）',
            color: 'purple'
          },
          {
            lt: 10
          }
        ],
        inRange: {
          color: ['green', 'yellow', 'red']
        },
        outOfRange: {
          color: ['#fff']
        }
      },

      series: [
        {
          type: 'map',
          map: 'china',
          aspectScale: 0.75,
          zoom: 1.2,
          label: {
            normal: {
              show: false,
              textStyle: {
                color: '#000'
              }
            },
            emphasis: {
              show: true,
              textStyle: {
                color: '#000',
                fontSize: 14
              }
            }
          },
          itemStyle: {
            normal: {
              borderColor: 'gray',
              borderWidth: 2
            },
            emphasis: {
              areaColor: '#bbb'
            }
          },

          data: [
            {
              name: '西藏',
              value: 0
            },
            {
              name: '青海',
              value: 0
            },
            {
              name: '宁夏',
              value: 10
            },
            {
              name: '重庆',
              value: 30
            },
            {
              name: '贵州',
              value: 50
            },
            {
              name: '甘肃',
              value: 55
            },
            {
              name: '云南',
              value: 70
            },
            {
              name: '辽宁',
              value: 28
            },
            {
              name: '新疆',
              value: 0
            },
            {
              name: '黑龙江',
              value: 88
            },
            {
              name: '上海',
              value: 120
            },
            {
              name: '四川',
              value: 110
            },
            {
              name: '广西',
              value: 102
            },
            {
              name: '吉林',
              value: 76
            },
            {
              name: '内蒙古',
              value: 54
            },
            {
              name: '天津',
              value: 76
            },
            {
              name: '江西',
              value: 80
            },
            {
              name: '湖南',
              value: 43
            },
            {
              name: '陕西',
              value: 42
            },
            {
              name: '浙江',
              value: 50
            },
            {
              name: '广东',
              value: 18
            },
            {
              name: '福建',
              value: 66
            },
            {
              name: '北京',
              value: 30
            },
            {
              name: '海南',
              value: 18
            },
            {
              name: '湖北',
              value: {
                咨询标准: {
                  0: '鄂价工服规[2011]23号'
                },
                咨询项目: {
                  0: '工程项目设计概算编制',
                  1: '工程项目设计概算审核',
                  2: '清单计价-工程量清单编制或审核',
                  3: '清单计价-控制价（标底价）编制(不含工程量清单编制)',
                  4: '清单计价-控制价（标底价)、工程结算审核',
                  5: '定额计价-工程预算、标底编制',
                  6: '定额计价-工程预算、结算、标底审核',
                  7: '施工阶段全过程工程造价控制',
                  8: '竣工决算编制或审核',
                  9: '工程造价纠纷案件鉴定'
                },
                概算价: '',
                优惠折扣: '90'
              }
            },
            {
              name: '安徽',
              value: 80
            },
            {
              name: '河南',
              value: 42
            },
            {
              name: '江苏',
              value: 27
            },
            {
              name: '山西',
              value: 75
            },
            {
              name: '山东',
              value: 41
            },
            {
              name: '河北',
              value: 31
            },
            {
              name: '台湾',
              value: 59
            },
            {
              name: '澳门',
              value: 36
            },
            {
              name: '香港',
              value: 2
            }
          ]
        }
      ]
    }

    return option
  }
  onChartClick(param: any, echart: any) {
    console.log(param, echart)
    alert('chart click')
  }
  onChartLegendselectchanged(param: any, echart: any) {
    console.log(param, echart)
    alert('chart legendselectchanged')
  }
  onChartReady(echart: any) {
    console.log('echart is ready', echart)
  }
  render() {
    const onEvents = {
      click: this.onChartClick,
      legendselectchanged: this.onChartLegendselectchanged
    }
    return (
      <div>
        <ReactEcharts
          option={this.getOption() || {}}
          style={{
            height: '400px',
            width: '400px'
          }}
          className="react_for_echarts"
          onChartReady={this.onChartReady.bind(this)}
          onEvents={onEvents}
        />
      </div>
    )
  }
}
