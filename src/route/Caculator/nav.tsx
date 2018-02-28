import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { Button } from 'antd'

@inject('caculatorStore')
@observer
export default class CaculatorNav extends React.Component<any, any> {
  render() {
    const { caculatorStore, history } = this.props
    const { list: caculator, itemType } = caculatorStore

    return (
      <div className="btn-group">
        {!itemType ? (
          <Button
            type="primary"
            className="btn-group-item"
            onClick={() => {
              history.location.search = ''

              caculatorStore.setSelectMapItem(
                {
                  name: '全国',
                  value: 0
                },
                '11',
                ''
              )
            }}
          >
            造价计算器
          </Button>
        ) : (
          <Button
            className="btn-group-item"
            onClick={() => {
              history.location.search = ''

              caculatorStore.setSelectMapItem(
                {
                  name: '全国',
                  value: 0
                },
                '11',
                ''
              )
            }}
          >
            造价计算器
          </Button>
        )}
        <Button
          className="btn-group-item"
          onClick={() => {
            history.location.search = ''

            caculatorStore.setSelectMapItem(
              {
                name: '全国',
                value: 0
              },
              '13',
              ''
            )
          }}
        >
          地质灾害评估收费计算器
        </Button>

        <Button
          className="btn-group-item"
          onClick={() => {
            history.location.search = ''

            caculatorStore.setSelectMapItem(
              {
                name: '全国',
                value: 0
              },
              '15',
              ''
            )
          }}
        >
          水土保持计算器
        </Button>
        <Button
          className="btn-group-item"
          onClick={() => {
            history.location.search = ''

            caculatorStore.setSelectMapItem(
              {
                name: '全国',
                value: 0
              },
              '12',
              ''
            )
          }}
        >
          施工图计算器
        </Button>
        {caculator.map((v: any, k: any) => {
          return v.type === itemType ? (
            <Button
              key={v.id}
              type="primary"
              className="btn-group-item"
              onClick={() => {
                history.location.search = `?type=${v.type}`

                caculatorStore.setSelectMapItem(
                  {
                    name: '全国',
                    value: 0
                  },
                  v.type,
                  ''
                )
              }}
            >
              {v.calculatorName}
            </Button>
          ) : (
            <Button
              key={v.id}
              className="btn-group-item"
              onClick={() => {
                history.location.search = `?type=${v.type}`

                caculatorStore.setSelectMapItem(
                  {
                    name: '全国',
                    value: 0
                  },
                  v.type,
                  ''
                )
              }}
            >
              {v.calculatorName}
            </Button>
          )
        })}
      </div>
    )
  }
}
