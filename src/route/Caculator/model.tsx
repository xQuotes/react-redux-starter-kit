import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { Collapse, Modal, Tabs } from 'antd'

const Panel = Collapse.Panel
const TabPane = Tabs.TabPane

@inject('caculatorStore')
@observer
export default class CaculatorModal extends React.Component<any, {}> {
  render() {
    const { caculatorStore } = this.props
    const { presetVisible, presetValue } = caculatorStore

    const { title, description, list } = presetValue
    return (
      <Modal
        title={
          <div>
            {title}(<span
              style={{
                fontSize: '12px',
                color: '#333'
              }}
            >
              {description}
            </span>)
          </div>
        }
        visible={presetVisible}
        onOk={() => {
          caculatorStore.presetVisible = false
        }}
        onCancel={() => {
          caculatorStore.presetVisible = false
        }}
      >
        <Collapse defaultActiveKey={[]} onChange={this.props.onChange}>
          {(list || []).map((val: any, key: any) => {
            return (
              <Panel header={val.title} key={key}>
                <Tabs defaultActiveKey="1">
                  {(val.options || []).map((v: any, k: any) => {
                    return (
                      <TabPane tab={v.title} key="1">
                        <div className="list" key={k}>
                          {(v.selects || []).map((item: any, itemKey: any) => {
                            return (
                              <div
                                key={item.key}
                                className="list-item"
                                onClick={() => {
                                  this.props.onChange(item.value)
                                  caculatorStore.presetVisible = false
                                }}
                              >
                                {item.lable + `(${item.value})`}
                              </div>
                            )
                          })}
                        </div>
                      </TabPane>
                    )
                  })}
                </Tabs>
              </Panel>
            )
          })}
        </Collapse>
      </Modal>
    )
  }
}
