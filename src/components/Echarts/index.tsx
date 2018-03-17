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
        formatter: function (params: { value: string; name: string }) {
          if (params.value) {
            return params.name // + '<br />' + mapData[params.value].value
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
              areaColor: '#cdecff',
              borderColor: '#fff',
              borderWidth: 1
            },
            emphasis: {
              areaColor: '#3c8cff'
            }
          },

          data: mapData.map((v, k) => {
            return {
              name: v.name,
              value: k
            }
          })
        }
      ]
    }

    return option
  }
  onChartClick = (param: any, echart: any) => {
    const { store, typeName } = this.props // componentType = 'guide'
    const { data } = param
    if (typeName) {
      store.setSelectMapItem(data, typeName, store.componentType)
      return
    }
    if (store.itemType) {
      store.setSelectMapItem(data, store.itemType)
      // alert('该计算器是全国范围的')
    } else {
      store.setSelectMapItem(data, store.itemType)
    }
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
