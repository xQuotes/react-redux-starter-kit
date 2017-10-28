import * as React from 'react'
import { Button } from 'antd'

const caculator = [
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
export default class CaculatorNav extends React.Component<{}, {}> {
  render() {
    return (
      <div className="btn-group">
        {caculator.map((v, k) => {
          return v.active ? (
            <Button key={v.id} type="primary" className="btn-group-item">
              {v.title}
            </Button>
          ) : (
            <Button key={v.id} className="btn-group-item">
              {v.title}
            </Button>
          )
        })}
      </div>
    )
  }
}
