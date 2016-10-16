import './login.less'

export default class Login extends React.Component {
  static defaultProps = {
    prefixCls: 'login'
  }
  static propTypes = {
    className: React.PropTypes.string,
  }
  render() {
    const props = this.props
    const { className, prefixCls, ...others} = props

    const cls = classNames({
      [`${prefixCls}_form`]: true,
      [className]: className
    });
    return(
      <div
        {...others}
        className={cls}>
        <div className='login_header'>
          <img src="http://www.jqueryfuns.com/resource/view/670/flavr/images/icons/email.png" />
        </div>
        <div className='login_body'>
          <h1>登录</h1>
          <p>用户登录</p>
          <form className='login_form'>
            <div className='form_row'>
              <input type="text" name="username" placeholder="用户名"/>
            </div>
            <div className='form_row'>
              <input type="password" name="password" placeholder="密码"/>
            </div>
            <div className="form_row">
              <input type="checkbox" name="remember" id="check"/>
              <label for="check">记住我</label>
            </div>
          </form>
        </div>
        <div className='login_footer'>
          <a href="#" className="btn btn_primary">登录</a>
        </div>
      </div>
      )
  }
}