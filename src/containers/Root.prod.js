import {
  browserHistory
} from 'react-router'

import Root from './Root'
export default class RootDev extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
        <div className="root">
          <Root history={browserHistory} {...this.props}/>
        </div>
      )
  }
}