export default class Index extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div>
        {this.props.children}
      </div>
      )
  }
}