import './demofunc.less'

import Dashboard from '../dashboard/index'

export default class Demofunc extends React.Component {
  render() {
    return(
      <div className="switches">
        <Dashboard {...this.props}/>
      </div>
      )
  }
}
