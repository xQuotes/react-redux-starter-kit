import React from 'react'
import ReactJson from 'react-json-view'

export default class JSONView extends React.Component {
  render() {
    return (
      <ReactJson
        src={this.props.value}
        displayObjectSize={false}
        displayDataTypes={false}
        collapsed={true}
        jsvRoot={false}
        name={false}
        iconStyle={'circle'}
        {...this.props}
      />
    )
  }
}
