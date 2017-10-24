import React from 'react'
import { render } from 'react-dom'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

export default class Edit extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '' } // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    this.setState({ text: value })
  }

  render() {
    return (
      <ReactQuill
        style={{
          height: '600px'
        }}
        value={this.state.text || this.props.value}
        onChange={this.handleChange}
      />
    )
  }
}
