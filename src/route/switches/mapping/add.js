
export default class AddMapping extends React.Component {
  constructor(props) {
    super(props)
  }
  mappingIpExists(rule, value, callback) {
    if (!value) {
      callback()
    } else {
      if (!ipReg.test(value)) {
        callback([new Error("IP 格式不正确")]);
      } else {
        callback()
      }
    }
  }
  mappingPortExists(rule, value, callback) {
    if (!value) {
      callback();
    } else {
      if (!portReg.test(value)) {
        callback([new Error("端口格式不正确")]);
      } else {
        callback()
      }
    }
  }
  handleSubmit(e) {
    const {form} = this.props
    const {getFieldsValue, validateFields} = form

    validateFields((errors, values) => {
      const { dispatch, params, form } = this.props

      if (!!errors) {
        console.log('Errors in form!!!');
        return;
      }

      var data = _.pickBy(values)

      form.resetFields()
      this.hideModal()
      
      values.id ? dispatch(updateMapping({
        index: this.state.index,
        ...data
      })) : dispatch(addMapping(data))
    })
  }
  handleDeleteConfirm(formData) {
    const {dispatch} = this.props
    dispatch(deleteMapping(formData))
  }
  hideModal() {
    this.setState({ visible: false });
  }
  handleSubmit(e) {

  }



  render() {
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
    }

    return (
      <Modal title="操作映射"
          visible={this.state.visible}
          onOk={::this.handleSubmit}
          onCancel={::this.hideModal}>
        <Form horizontal>
          <Input autoCapitalize="off" type="hidden"
            {...getFieldProps('id', {
                initialValue: mapping.id
              })}/>
          <FormItem
            {...formItemLayout}
            hasFeedback
            label="主机名">
            <Input autoCapitalize="off"
              placeholder={`请输入主机名`}
              {...getFieldProps('hostname', {
                initialValue: mapping.hostname,
                rules: [
                  { required: true, whitespace: true, message: '请输入主机名' }
                ],
              })} type="text"/>
          </FormItem>
          <FormItem
            {...formItemLayout}
            hasFeedback
            label="公网IP">
            <Input autoCapitalize="off"
              placeholder={`如：123.125.114.144`}
              {...getFieldProps('ext_ip', {
                initialValue: mapping.ext_ip,
                rules: [
                  { required: true, whitespace: true, message: '请输入公网IP' },
                  { validator: ::this.mappingIpExists },
                ],
              })} type="text"/>
          </FormItem>
          <FormItem
            {...formItemLayout}
            hasFeedback
            label="公网端口">
            <Input autoCapitalize="off"
              placeholder={`如：80`}
              {...getFieldProps('ext_port', {
                initialValue: mapping.ext_port,
                rules: [
                  { required: true, whitespace: true, message: '请输入公网端口' },
                  { validator: ::this.mappingPortExists },
                ],
              })} type="text"/>
          </FormItem>
          <FormItem
            {...formItemLayout}
            hasFeedback
            label="内网IP">
            <Input autoCapitalize="off"
              placeholder={`如：192.168.1.1`}
              {...getFieldProps('int_ip', {
                initialValue: mapping.int_ip,
                rules: [
                  { required: true, whitespace: true, message: '请输入内网IP' },
                  { validator: ::this.mappingIpExists },
                ],
              })} type="text"/>
          </FormItem>
          <FormItem
            {...formItemLayout}
            hasFeedback
            label="内网端口">
            <Input autoCapitalize="off"
              placeholder={`如：80`}
              {...getFieldProps('int_port', {
                initialValue: mapping.int_port,
                rules: [
                  { required: true, whitespace: true, message: '请输入内网端口' },
                  { validator: ::this.mappingPortExists },
                ],
              })} type="text"/>
          </FormItem>
        </Form>
      </Modal>)
  }
}