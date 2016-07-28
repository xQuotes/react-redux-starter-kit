import React from 'react'
import {
  Link,
  browserHistory,
  hashHistory
} from 'react-router'

import './404.less'
class Page404 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      second: 5
    }
  }
  tick() {
    if (this.state.second > 1)
      this.setState({
        second: this.state.second - 1
      })
    else
      hashHistory.push('/index')
  }
  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 1000)
      
    // var intervalid = setInterval(function () {
    //   browserHistory.push('/')
    //   clearInterval(intervalid)
    // }.bind(this), 5000);
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  render() {
    return (
      <div
        className="page404-body">
        <div className="page404">
          <div className="f404">
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </div>
          <div className="f404-des">
            该页面不存在(´･ω･`)<br />
            <Link to="/index">
              跳到首页({this.state.second}秒)
            </Link>
            <br />
            <a href="#" 
              onClick={() => browserHistory.goBack()}>
              点击返回上一页
            </a>
          </div>
        </div>
      </div>
      )
  }
}

module.exports = Page404