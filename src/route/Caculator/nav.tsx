import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { Button } from 'antd'

const caculators = [
  {
    title: '勘查计算器',
    id: '1',
    active: true
  },
  {
    title: '勘查计算器1',
    id: '11',
    active: false
  },
  {
    title: '勘查计算器2',
    id: '12',
    active: false
  },
  {
    title: '勘查计算器3',
    id: '13',
    active: false
  },
  {
    title: '勘查计算器3',
    id: '14',
    active: false
  }
]

@inject('caculatorStore')
@observer
export default class CaculatorNav extends React.Component<any, {}> {
  render() {
    const { caculatorStore } = this.props
    const { list: caculator, itemType } = caculatorStore
    console.log(caculators, caculator)
    return (
      <div className="btn-group">
        <Button
          type="primary"
          className="btn-group-item"
          onClick={() => {
            caculatorStore.setItem({
              type: ''
            })
          }}
        >
          造价计算器
        </Button>
        {caculator.map((v: any, k: any) => {
          return v.type === itemType ? (
            <Button
              key={v.id}
              type="primary"
              className="btn-group-item"
              onClick={() => {
                caculatorStore.setItem({
                  type: v.type
                })
              }}
            >
              {v.calculatorName}
            </Button>
          ) : (
            <Button key={v.id} className="btn-group-item">
              {v.calculatorName}
            </Button>
          )
        })}
      </div>
    )
  }
}
