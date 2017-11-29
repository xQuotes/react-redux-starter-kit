import { Table, Input, Icon, Button, Popconfirm } from 'antd'

export default class EditableCell extends React.Component {
  state = {
    value: this.props.value,
    editable: false
  }
  handleChange = e => {
    const value = e.target.value
    this.setState({ value })
  }
  check = () => {
    this.setState({ editable: false })
    if (this.props.onChange) {
      this.props.onChange(this.state.value)
    }
  }
  edit = () => {
    this.setState({ editable: true })
  }
  render() {
    const { value, editable } = this.state
    console.log(value)
    return (
      <div className="editable-cell">
        {editable ? (
          <div className="editable-cell-input-wrapper">
            {value === undefined || value.length < 100 ? (
              <Input
                value={value}
                onChange={this.handleChange}
                onPressEnter={this.check}
              />
            ) : (
              <Input.TextArea
                value={value}
                onChange={this.handleChange}
                onPressEnter={this.check}
                autosize={{ minRows: 3, maxRows: 6 }}
              />
            )}
            <Icon
              type="check"
              className="editable-cell-icon-check"
              onClick={this.check}
            />
          </div>
        ) : (
          <div className="editable-cell-text-wrapper">
            <pre>{value || ' '}</pre>
            <Icon
              type="edit"
              className="editable-cell-icon"
              onClick={this.edit}
            />
          </div>
        )}
      </div>
    )
  }
}
