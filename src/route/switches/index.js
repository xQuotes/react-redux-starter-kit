import './switches.less'

import Dashboard from '../dashboard/index'

export default class Switches extends React.Component {
  render() {
    return(
      <div className="switches">
        <Dashboard {...this.props}/>
      </div>
      )
  }
}
