import React, { Component, PropTypes } from 'react'
import PDFObject from 'pdfobject'

export default class PdfViewer extends Component {
  componentDidMount() {
    const { pdfBlob, containerId } = this.props

    PDFObject.embed(pdfBlob, `#${containerId}`)
  }

  render() {
    const { width, height, containerId } = this.props

    return <div style={{ width, height }} id={containerId} />
  }
}

PdfViewer.propTypes = {
  pdfBlob: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  containerId: PropTypes.string
}

PdfViewer.defaultProps = {
  width: '100%',
  height: '100%',
  containerId: 'pdf-viewer'
}
// PdfViewer
