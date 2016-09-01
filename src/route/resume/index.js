import './resume.less'

export default class Resume extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="resume-app">
        <div className="resume">
          <div className="resume-header">
            <h2 className="resume-username">付引</h2>
            <h3 className="resume-actor">全栈开发</h3>
            <ul className="resume-contact">
              <li>微信: foooyin</li>
              <li>邮箱: fooying@qq.com</li>
            </ul>
          </div>
          <div className="resume-body">
            <div className="resume-body-item">
              <h3>
                教育经历 <span>Education</span>
              </h3>
              <div className="resume-main">
                <span className="col-8">山东财经大学</span>
                <span className="col-8">电子商务专业</span>
                <span className="col-8">2010-2014</span>
              </div>
            </div>
            <div className="resume-body-item">
              <h3>
                知识技能 <span>Knowledge</span>
              </h3>
              <div className="resume-main">
                <div className="col-24">
                  <h4>前端技能</h4>
                  <ul>
                    <li>追逐了三代(grunt，gulp，webpack)自动化的步骤，</li>
                    <li>追逐了前后端分离流行的两大框架（Angular.js，React.js），</li>
                    <li>最终形成了以 webpack + React.js + Babel + ES6 为主的开发栈，</li>
                  </ul>
                </div>
                <div className="col-24">
                  <h4>后端技能</h4>
                  <div>
                    <li>Node.js</li>
                    <li>PHP</li>
                  </div>
                </div>
                <div className="col-24">
                  <h4>基础能力</h4>
                  <ul>
                    <li>追求敏捷团队开发</li>
                    <li>Git </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="resume-body-item">
              <h3>
                个人经历 <span>Experience</span>
              </h3>
              <div className="resume-main">
                <div className="col-24">
                  新东方在线<br/>
                  速发讯达<br/>
                  凤凰网<br/>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-footer">
          </div>
        </div>
      </div>
      )
  }
}