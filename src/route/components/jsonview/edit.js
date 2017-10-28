import React from 'react'
import ReactJson from 'react-json-view'

export default class JSONEdit extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }
  }
  render() {
    const { form, field, value } = this.props

    return (
      <ReactJson
        src={this.state.value || value}
        displayObjectSize={false}
        displayDataTypes={false}
        jsvRoot={false}
        name={false}
        iconStyle={'circle'}
        onEdit={e => {
          this.setState({ value: e.updated_src })
          form.setFieldsValue({
            [field]: e.updated_src
          })
        }}
        onDelete={e => {
          this.setState({ value: e.updated_src })
          form.setFieldsValue({
            [field]: e.updated_src
          })
        }}
        onAdd={e => {
          this.setState({ value: e.updated_src })
          form.setFieldsValue({
            [field]: e.updated_src
          })
        }}
        {...this.props}
      />
    )
  }
}
