import Dashboard from '../dashboard/index'

export default class Index extends React.Component {
  render() {
    return(
      <div>
        <Dashboard {...this.props}/>
      </div>
      )
  }
}