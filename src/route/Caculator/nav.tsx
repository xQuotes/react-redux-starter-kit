import * as React from 'react'
import { Button } from 'antd'

const caculator = [
  {
    title: '勘查计算器',
    id: '1'
  },
  {
    title: '勘查计算器1',
    id: '11'
  },
  {
    title: '勘查计算器2',
    id: '12'
  },
  {
    title: '勘查计算器3',
    id: '13'
  }
]
export default class CaculatorNav extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        {caculator.map((v, k) => {
          return <Button key={v.id}>{v.title}</Button>
        })}
      </div>
    )
  }
}
