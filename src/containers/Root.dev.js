import {
  browserHistory
} from 'react-router'

import DevTool from 'mobx-react-devtools'

import Root from './Root'
export default class RootDev extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
        <div className="root">
          <Root history={browserHistory}/>
          <DevTool />
        </div>
      )
  }
}