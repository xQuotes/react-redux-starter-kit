import * as React from 'react'
import Header from '../../components/Header/'
import Footer from '../../components/Footer/'

export default class Caculator extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <Header {...this.props} />
        <div className="main-container">Message</div>
        <Footer />
      </div>
    )
  }
}
