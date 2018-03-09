import * as React from 'react'
import Header from '../../components/Header/'
import Footer from '../../components/Footer/'

import PDF from '../../components/PDF/'

import ToolsLink from './toolsLink'
<<<<<<< HEAD
=======

>>>>>>> a4bf1d86aa48299d97e4900a2f850047b1e12521
import './tools.less'
export default class Caculator extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <Header {...this.props} />
        <div className="main-container">
          <ToolsLink />
          <PDF
            pdfBlob={'https://pdfobject.com/pdf/sample-3pp.pdf'}
            containerId={'pdf'}
            width={'100%'}
            height={'1200px'}
          />
          <div id="pdf" />
        </div>
        <Footer />
      </div>
    )
  }
}
