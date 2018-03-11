import * as React from 'react'
import { Row, Card } from 'antd'
const tools = [
  {
    label: '型钢理论重量2',
    color: '#55c1bc',
    img:
      'http://www.bjjs.gov.cn/bjjs/uiFramework/commonResource/image/2016101417375494158.png',
    url: 'http://localhost:3000/news/1',
    bg: require('./bg1.png'),
    download: true
  },
  {
    label: '型钢理论重量',
    color: '#fa7475',
    img:
      'http://www.bjjs.gov.cn/bjjs/uiFramework/commonResource/image/2016101417375494158.png',
    url: 'http://localhost:3000/news/1',
    bg: require('./bg1-2.png'),
    download: true
  },
  {
    label: '型钢理论重量',
    color: '#fdb472',
    img:
      'http://www.bjjs.gov.cn/bjjs/uiFramework/commonResource/image/2016101417375494158.png',
    url: 'http://localhost:3000/news/1',
    bg: require('./bg2-2.png'),
    download: true
  },
  {
    label: '型钢理论重量',
    color: '#5ec6e3',
    img:
      'http://www.bjjs.gov.cn/bjjs/uiFramework/commonResource/image/2016101417375494158.png',
    url: 'http://localhost:3000/news/1',
    bg: require('./bg2.png'),
    download: true
  },
  {
    label: '型钢理论重量',
    color: '#c5aedf',
    img:
      'http://www.bjjs.gov.cn/bjjs/uiFramework/commonResource/image/2016101417375494158.png',
    url: 'http://localhost:3000/news/1',
    bg: require('./bg1-2.png'),
    download: true
  },
  {
    label: '型钢理论重量',
    color: '#8cddb2',
    img:
      'http://www.bjjs.gov.cn/bjjs/uiFramework/commonResource/image/2016101417375494158.png',
    url: 'http://localhost:3000/news/1',
    bg: require('./bg1-2.png'),
    download: true
  },
  {
    label: '型钢理论重量',
    color: '#87cba7',
    img:
      'http://www.bjjs.gov.cn/bjjs/uiFramework/commonResource/image/2016101417375494158.png',
    url: 'http://localhost:3000/news/1',
    bg: require('./bg1-2.png'),
    download: true
  },
  {
    label: '更多...',
    color: '#d8c155',
    img:
      'http://www.bjjs.gov.cn/bjjs/uiFramework/commonResource/image/2016101417375494158.png',
    url: 'http://localhost:3000/tools',
    bg: require('./bg1-2.png'),
    download: false
  }
]

export default class Index extends React.Component<{}, {}> {
  render() {
    return (
      <Row gutter={24}>
        <Card noHovering>
          {tools.map((v, k) => (
            <a href={v.url} target={v.download ? '__blank' : '_self'}>
              <Card.Grid className="t-tool"
                style={{
                  width: '126px',
                  padding: '0 5px',
                  border: 'none'
                  /*  background: `url(${require('./bg1-2.png')}) no-repeat` */
                }}
              >
                <div
                  className="custom-card t-bg"
                  style={{
                    background: `url(${v.bg}) no-repeat`
                  }}
                >
                
                </div>
                <h3 className="t-font"
                >
                  {v.label}
                </h3>
              </Card.Grid>
            </a>
          ))}
        </Card>
      </Row>
    )
  }
}
