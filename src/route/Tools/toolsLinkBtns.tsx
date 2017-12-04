import * as React from 'react'
import { Row, Card } from 'antd'

const tools = [
  {
    label: '型钢理论重量',
    color: '#55c1bc',
    img:
      'http://www.bjjs.gov.cn/bjjs/uiFramework/commonResource/image/2016101417375494158.png',
    url: 'http://localhost:3000/news/1',
    download: true
  },
  {
    label: '型钢理论重量',
    color: '#fa7475',
    img:
      'http://www.bjjs.gov.cn/bjjs/uiFramework/commonResource/image/2016101417375494158.png',
    url: 'http://localhost:3000/news/1',
    download: true
  },
  {
    label: '型钢理论重量',
    color: '#fdb472',
    img:
      'http://www.bjjs.gov.cn/bjjs/uiFramework/commonResource/image/2016101417375494158.png',
    url: 'http://localhost:3000/news/1',
    download: true
  },
  {
    label: '型钢理论重量',
    color: '#5ec6e3',
    img:
      'http://www.bjjs.gov.cn/bjjs/uiFramework/commonResource/image/2016101417375494158.png',
    url: 'http://localhost:3000/news/1',
    download: true
  },
  {
    label: '型钢理论重量',
    color: '#c5aedf',
    img:
      'http://www.bjjs.gov.cn/bjjs/uiFramework/commonResource/image/2016101417375494158.png',
    url: 'http://localhost:3000/news/1',
    download: true
  },
  {
    label: '型钢理论重量',
    color: '#8cddb2',
    img:
      'http://www.bjjs.gov.cn/bjjs/uiFramework/commonResource/image/2016101417375494158.png',
    url: 'http://localhost:3000/news/1',
    download: true
  },
  {
    label: '型钢理论重量',
    color: '#87cba7',
    img:
      'http://www.bjjs.gov.cn/bjjs/uiFramework/commonResource/image/2016101417375494158.png',
    url: 'http://localhost:3000/news/1',
    download: true
  },
  {
    label: '更多...',
    color: '#d8c155',
    img:
      'http://www.bjjs.gov.cn/bjjs/uiFramework/commonResource/image/2016101417375494158.png',
    url: 'http://localhost:3000/tools',
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
              <Card.Grid
                style={{
                  width: '100px',
                  height: '100px',
                  margin: '8px',
                  textAlign: 'center',
                  backgroundColor: v.color,
                  borderRadius: '50%'
                }}
              >
                <div
                  className="custom-card"
                  style={{
                    height: '62px'
                  }}
                >
                  <h3
                    style={{
                      color: '#fff',
                      padding: '6px 0'
                    }}
                  >
                    {v.label}
                  </h3>
                </div>
              </Card.Grid>
            </a>
          ))}
        </Card>
      </Row>
    )
  }
}
