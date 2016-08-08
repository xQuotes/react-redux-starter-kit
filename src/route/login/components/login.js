import React from 'react'
import classNames from 'classnames'
import {
  connect
} from 'react-redux'

import {
  login
} from '../actions'

import './login.less'
@connect(() => ({

}))
export default class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      user: '',
      pass: '',
      agreement: false
    }
  }
  handleSubmit(e) {
    e.preventDefault()

    const { dispatch } = this.props
    dispatch(login(this.state))
  } 
  render() {
    const { className, ...others} = this.props
    const { user, pass, agreement } = this.state

    const cls = classNames({
      login_form: true,
      [className]: className
    });
    return(
      <div
        className={cls}>
        <div className='login_header'>
          <img src="" />
        </div>
        <div className='login_body'>
          <h1>登录</h1>
          <p>用户登录</p>
          <form className='login_form'>
            <div className='form_row'>
              <input type="text" name="user" placeholder="用户名"
                onChange={
                  (e) => {
                    this.setState({user: e.target.value})
                  }
                }/>
            </div>
            <div className='form_row'>
              <input type="password" name="pass" placeholder="密码"
                onChange={
                  (e) => {
                    this.setState({pass: e.target.value})
                  }
                }/>
            </div>
            <div className="form_row">
              <input type="checkbox" name="agreement" id="check" checked={agreement}
                onChange={
                  (e) => {
                    this.setState({agreement: e.target.value})
                  }
                }/>
              <label htmlFor="check">记住我</label>
            </div>
          </form>
        </div>
        <div className='login_footer'>
          <a href="#" className="btn btn_primary"
            onClick={::this.handleSubmit}>登录</a>
        </div>
      </div>
      )
  }
}