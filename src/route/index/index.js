import Dashboard from '../dashboard/index'

export default class Index extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div>
        <Dashboard {...this.props}/>
      </div>
      )
  }
}