import {
  inject, observer
} from 'mobx-react'
import moment from 'moment'
import {
  Form, Input, Row, Col, Button,
  DatePicker
} from 'antd'
const FormItem = Form.Item

@Form.create()
@inject('backupStore') @observer
export default class SearchTable extends React.Component {
  constructor(props) {
    super(props)
  }
  handleSubmit(e) {
    e.preventDefault()
    const {form, backupStore} = this.props
    form.validateFields((errors, values) => {
      if (!!errors) {
        console.log('Errors in form!!!');
        return;
      }
      var searchData = _.pickBy(values)
      // dispatch(searchBackupData(searchData))
      // dispatch(getBackups(searchData))
      console.log(searchData)
      backupStore.getBackupsServer(searchData)
    })
  }
  componentDidMount() {
    this.props.backupStore.getBackupsServer({})
  }
  handleReset(e) {
    e.preventDefault()
    const {form, dispatch} = this.props
    form.resetFields()
    dispatch(searchBackupData({}))
  }
  render() {
    const searchBackupDatas = {
      name: '',
      host: '',
      brand: '',
      sn: '',
      day: ''
    }

    const {
      getFieldDecorator, getFieldError, isFieldValidating,
      setFieldsValue
    } = this.props.form

    return(
      <Form horizontal className="ant-advanced-search-form">
        <Row gutter={5}>
          <Col sm={4}>
            <FormItem
              label="主机名"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}>
              <Input autoCapitalize="off" placeholder="请输入搜索主机名" size="default"
                {...getFieldDecorator('name', {
                  initialValue: searchBackupDatas.name
                })}/>
            </FormItem>
          </Col>
          <Col sm={4}>
            <FormItem
              label="IP"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}>
              <Input autoCapitalize="off" placeholder="请输入搜索IP" size="default"
                {...getFieldDecorator('host', {
                  initialValue: searchBackupDatas.host
                })} />
            </FormItem>
          </Col>
          <Col sm={4}>
            <FormItem
              label="品牌"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}>
              <Input autoCapitalize="off" placeholder="请输入搜索品牌" size="default"
                {...getFieldDecorator('brand', {
                  initialValue: searchBackupDatas.brand
                })} />
            </FormItem>
          </Col>
          <Col sm={4}>
            <FormItem
              label="SN"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}>
              <Input autoCapitalize="off" placeholder="请输入搜索SN" size="default"
                {...getFieldDecorator('sn', {
                  initialValue: searchBackupDatas.sn
                })} />
            </FormItem>
          </Col>
          <Col sm={5}>
            <FormItem
              label="日期"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}>
              <DatePicker format="YYYY-MM-DD"
                {...getFieldDecorator('day', {
                  initialValue: searchBackupDatas.day || moment(new Date()).format('YYYY-MM-DD')
                })}
                onChange={(date, dateString)=> {
                  console.log(date)
                  console.log(dateString)
                  setFieldsValue({
                    'day': dateString || null
                  })
                }}/>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span={12} offset={12} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit" onClick={::this.handleSubmit}>搜索</Button>
            <Button onClick={::this.handleReset}>清除条件</Button>
          </Col>
        </Row>
      </Form>
      )
  }
}
