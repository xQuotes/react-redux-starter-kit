import * as React from 'react'
import Header from '../../components/Header/'
import Footer from '../../components/Footer'

export interface HelloProps {
  compiler: string
  framework: string
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export default class Hello extends React.Component<{}, {}> {
  render() {
    return <div>
      <Header />
      {this.props.children}
      <Footer />
    </div>
  }
}
