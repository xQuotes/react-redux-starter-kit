import * as React from 'react'
import 'echarts/map/js/china.js'
import { Select } from 'antd'
const Option = Select.Option

import mapData from './const'

export default class SelectComponent extends React.Component<any, {}> {
  onChartClick = (param: any) => {
    const { store, typeName } = this.props // componentType = 'guide'
    const data = JSON.parse(param)
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
  render() {
    return (
      <div>
        <Select
          size={'large'}
          defaultValue={JSON.stringify({ name: '北京', value: 1 })}
          style={{
            width: 80,
            margin: 10
          }}
          onChange={this.onChartClick}
        >
          {mapData.map((v, k) => {
            return (
              <Option
                value={JSON.stringify({
                  name: v.name,
                  value: k
                })}
                key={k}
              >
                {v.name}
              </Option>
            )
          })}
        </Select>
      </div>
    )
  }
}
