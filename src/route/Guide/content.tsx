import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { Row, Col } from 'antd'

import './guide.less'

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

  componentDidMount() {
    // function setIframeHeight(iframe: any) {
    //   if (iframe) {
    //     var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
    //     if (iframeWin.document.body) {
    //       iframe.height = iframeWin.document.documentElement.scrollHeight || iframeWin.document.body.scrollHeight;
    //     }
    //   }
    // };

    // window.onload = function () {
    //   setIframeHeight(document.getElementById('external-frame'));
    // };
  }

  render() {
    const { standardStore, location: { state } } = this.props
    const { list } = standardStore
    const { id } = state || { id: '' }
    const item = list.find((val: any) => val.id === id) || {}

    return (
      <Row className="tools-component">
        <Col span={24} className="main-title">
          <span className="main-title-content">{item.fileName}</span>
        </Col>
        <Col span={24} className="main-contain">
          <iframe id="external-frame" src={item.url} width="100%" height="1600px" frameBorder="0" />
        </Col>
      </Row>
    )
  }
}
