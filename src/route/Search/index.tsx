import * as React from 'react'
import { inject, observer } from 'mobx-react'
import Header from '../../components/Header/'
import Footer from '../../components/Footer/'

import { List, Row, Col } from 'antd'

@inject('searchStore')
@observer
export default class Caculator extends React.Component<any, {}> {
  componentWillMount() {
    const { searchStore } = this.props
    searchStore.getCostindex({
      putaway: 1,
      type: 1,
      typeName: 'costindex'
    })

    searchStore.getCostindex({
      putaway: 1,
      type: 1,
      typeName: 'laborcost'
    })
  }
  render() {
    const { searchStore } = this.props
    const { costindexs, costindex, laborcosts, laborcost } = searchStore
    return (
      <div>
        <Header {...this.props} />
        <Row>
          <Col span={12}>
            <div>造价指数</div>
            <div
              className="main-container"
              style={{
                width: '100%',
                height: 600,
                overflowY: 'auto'
              }}
            >
              <List
                header={false}
                footer={false}
                bordered
                dataSource={costindexs}
                renderItem={(item: any) => (
                  <List.Item>
                    <a
                      onClick={() => {
                        searchStore.selectCostindex('costindex', item)
                      }}
                    >
                      {item.fileName}
                    </a>
                  </List.Item>
                )}
              />
            </div>
            <div>
              <iframe
                src={costindex.url}
                width="100%"
                height="1000px"
                frameBorder="0"
              />
            </div>
          </Col>
          <Col span={12}>
            <div>人工成本</div>
            <div
              className="main-container"
              style={{
                width: '100%',
                height: 600,
                overflowY: 'auto'
              }}
            >
              <List
                header={false}
                footer={false}
                bordered
                dataSource={laborcosts}
                renderItem={(item: any) => (
                  <List.Item>
                    <a
                      onClick={() => {
                        searchStore.selectCostindex('laborcost', item)
                      }}
                    >
                      {item.fileName}
                    </a>
                  </List.Item>
                )}
              />
            </div>
            <div>
              <iframe
                src={laborcost.url}
                width="100%"
                height="1000px"
                frameBorder="0"
              />
            </div>
          </Col>
        </Row>
        <Footer />
      </div>
    )
  }
}
