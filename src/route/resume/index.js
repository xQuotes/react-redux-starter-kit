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
          </div>
          <div className="resume-body">
          </div>
          <div className="resume-footer">
          </div>
        </div>
      </div>
      )
  }
}