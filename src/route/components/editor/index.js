import React from 'react';
import { render } from 'react-dom';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/json';
import 'brace/theme/github';


export default class Editor extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: props.defaultValue
    }
  }
  onChange(value) {
    this.setState({
      value
    })
  }
  render() {
    return (
      <AceEditor
        mode="javascript"
        theme="github"
        onChange={::this.onChange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{$blockScrolling: true}}
        {...this.props}
        value={this.state.value}
      />
    )
  }
}