import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { Row, Col } from 'antd'

@inject('standardStore')
@observer
export default class Index extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      datatext: '',
      current: '',
      fileName: ''
    }
  }
  // componentDidMount() {
  //   console.log(this.props)
  //   const { standardStore, location } = this.props
  //   const { id } = location.state || { id: '' }
  //   const { list } = standardStore

  //   if (id) {
  //     const item = list.find((val: any) => val.id === id) || {}

  //     this.setState({
  //       current: id,
  //       fileName: item.fileName
  //     })
  //     if (item.url) {
  //       this.checkout(item.url)
  //     }
  //   }
  // }
  // componentWillReceiveProps(props: any) {
  //   const { location } = props
  //   const { id } = location.state || { id: '' }

  //   const { standardStore, location: thisLocation } = this.props
  //   const { id: thisID } = thisLocation.state || { id: '' }

  //   const { list } = standardStore

  //   if (id !== thisID) {
  //     const item = list.find((val: any) => val.id === id) || {}
  //     this.setState({
  //       current: id,
  //       fileName: item.fileName
  //     })
  //     if (item.url) {
  //       this.checkout(item.url)
  //     }
  //   }
  // }
  // checkout = (url: any) => {
  //   return fetch(url).then(data => {
  //     data.text().then(text => {
  //       // appendScript(text)
  //       this.setState({
  //         datatext: text
  //       })
  //     })
  //   })
  // }
  render() {
    const { standardStore, location: { state } } = this.props
    const { list } = standardStore
    const { id } = state || { id: '' }
    const item = list.find((val: any) => val.id === id) || {}

    return (
      <Row className="tools-component">
        <Col span={24} className="main-title">
          {item.fileName}
        </Col>
        <Col span={24} className="main-contain">
          <html>
            <head>
              <meta
                http-equiv="Content-Type"
                content="text/html; charset=GBK"
              />
            </head>
            <body>
              中间页，编码为gbk，明确指定了编码类型。帮助目标页确定编码
              <iframe
                src={item.url}
                width="100%"
                height="1000px"
                frameBorder="0"
              />
            </body>
          </html>
        </Col>
      </Row>
    )
  }
}
