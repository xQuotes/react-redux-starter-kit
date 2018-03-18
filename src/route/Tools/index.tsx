import * as React from 'react'
import Header from '../../components/Header/'
import Footer from '../../components/Footer/'

// import PDF from '../../components/PDF/'

// import ToolsLink from './toolsLink'
import Loading from '../../components/Coding/index'

import './tools.less'
export default class Caculator extends React.Component<{}, {}> {
  render() {
    return (
      <div className="tools">
        <Header {...this.props} />
        <Loading />
        <div className="main-container">
        </div>
        <Footer />
      </div>
    )
  }
}


/* <ToolsLink />
<PDF
  pdfBlob={'https://pdfobject.com/pdf/sample-3pp.pdf'}
  containerId={'pdf'}
  width={'100%'}
  height={'1200px'}
/>
<div id="pdf" /> */