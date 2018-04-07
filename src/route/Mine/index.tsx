import * as React from 'react'
import { Button, Upload, message } from 'antd'
import Header from '../../components/Header/'
import Footer from '../../components/Footer/'

import MineMenu from './menu'
import MineInfo from './info'

import './mine.less'

export default class Mine extends React.Component<any, any> {
  uploadProps() {
    return {
      name: 'file',
      multiple: true,
      showUploadList: false,
      action: 'http://www.anyfees.com/api/file/upload',
      data: {
        name: 'avator'
      },
      withCredentials: true,
      // headers: {
      //   'X-Requested-With': null
      // },
      onChange(info: any) {
        const status = info.file.status
        console.log(info)
        if (status !== 'uploading') {
          console.log(info.file, info.fileList)
        }
        if (status === 'done') {
          console.log(info)
          const response = info.file.response
          console.log(response)
          message.success(`${info.file.name} file uploaded successfully.`)
        } else if (status === 'error') {
          message.error(`${info.file.name} file upload failed.`)
        }
      }
    }
  }
  render() {
    return (
      <div className="mine">
        <Header {...this.props} />
        <div className="main-container">
          <div className="left-menu">
            <div className="info">
              <Upload {...this.uploadProps()}>
                <img src={require('../../common/images/首页/333.png')} alt="" className="avator" />
              </Upload>
              <div className="name">
                熬夜不配的冬天
              </div>
              <div className="huiyuan">
                <img src={require('../../common/images/menu/huiyuan.png')} alt="" className="huiyuan-icon" />
                <span className="huiyuan-label">
                  普通会员
                </span>
              </div>
            </div>
            <MineMenu />
            <div className="vip-btn">
              <Button>开通 VIP</Button>
            </div>
          </div>
          <div className="right-content">
            <MineInfo />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
