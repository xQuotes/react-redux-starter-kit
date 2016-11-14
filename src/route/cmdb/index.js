import './cmdb.less'

import Dashboard from '../dashboard/index'

export default class Cmdb extends React.Component {
  render() {
    return(
      <div className="cmdb">
        <Dashboard {...this.props}/>
      </div>
      )
  }
}
