import * as React from 'react'
import { Button, Upload, message } from 'antd'
import { Link } from 'react-router-dom'

import Urls from '../../common/url'

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
    const { match: { params: { type } } } = this.props
    const userInfo = JSON.parse(localStorage.user_info || '{}')
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
                {userInfo.nickName}
              </div>
              <div className="huiyuan">
                <img src={require('../../common/images/menu/huiyuan.png')} alt="" className="huiyuan-icon" />
                <span className="huiyuan-label">
                  普通会员
                </span>
              </div>
            </div>
            <MineMenu {...this.props} />
            <div className="vip-btn">
              <Link to={Urls.vip}><Button>开通 VIP</Button></Link>
            </div>
          </div>
          <div className="right-content">
            {type === 'info' && <MineInfo />}
            {type != 'info' && <div style={{
              height: '800px',
              backgroundColor: 'rgb(243, 244, 246)',
              textAlign: 'center',
              lineHeight: '600px',
              fontSize: '36px'
            }}>正在努力建设中...</div>}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
