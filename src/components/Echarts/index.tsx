import * as React from 'react'
import ReactEcharts from 'echarts-for-react'
import 'echarts/map/js/china.js'

import mapData from './const'

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
            return params.name + '<br />' + params.value
          } else {
            return null
          }
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
              show: true,
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
              areaColor: '#ebf0f4',
              borderColor: '#fff',
              borderWidth: 1
            },
            emphasis: {
              areaColor: '#3c8cff'
            }
          },

          data: [
            {
              name: '全国',
              value: 0
            },
            {
              name: '北京',
              value: 1
            },
            {
              name: '广西',
              value: 2
            },
            {
              name: '甘肃',
              value: 3
            },
            {
              name: '广东',
              value: 4
            },
            {
              name: '贵州',
              value: 5
            },
            {
              name: '河南',
              value: 6
            },
            {
              name: '黑龙江',
              value: 7
            },
            {
              name: '湖北',
              value: 8
            },
            {
              name: '吉林',
              value: 9
            },
            {
              name: '江苏',
              value: 10
            },
            {
              name: '江西',
              value: 11
            },
            {
              name: '四川',
              value: 12
            },
            {
              name: '浙江',
              value: 13
            },
            {
              name: '上海',
              value: 14
            },
            {
              name: '天津',
              value: 15
            },
            {
              name: '重庆',
              value: 16
            },
            {
              name: '内蒙古',
              value: 17
            },
            {
              name: '宁夏',
              value: 18
            },
            {
              name: '新疆',
              value: 19
            },
            {
              name: '安徽',
              value: 20
            },
            {
              name: '福建',
              value: 21
            },
            {
              name: '海南',
              value: 22
            },
            {
              name: '陕西',
              value: 23
            },
            {
              name: '湖南',
              value: 24
            },
            {
              name: '辽宁',
              value: 25
            },
            {
              name: '青海',
              value: 26
            },
            {
              name: '山东',
              value: 27
            },
            {
              name: '山西',
              value: 28
            },
            {
              name: '云南',
              value: 29
            }
          ]
        }
      ]
    }

    return option
  }
  onChartClick = (param: any, echart: any) => {
    const { store } = this.props
    const { data } = param
    console.log(mapData, param, data)
    store.selectMapItem = data
    console.log(param, echart)
  }
  onChartLegendselectchanged = (param: any, echart: any) => {
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
    const estyle = {
      height: '600px',
      width: '600px',
      ...this.props.style
    }
    return (
      <div>
        <ReactEcharts
          option={this.getOption() || {}}
          style={estyle}
          className="react_for_echarts"
          onChartReady={this.onChartReady.bind(this)}
          onEvents={onEvents}
        />
      </div>
    )
  }
}
