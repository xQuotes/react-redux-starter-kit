import * as React from 'react'
import { Route } from 'react-router'
import Header from '../../components/Header/'
import Footer from '../../components/Footer/'

import NewsView from './view'

export default class News extends React.Component<any, {}> {
  render() {
    const { match } = this.props
    console.log(match)
    return (
      <div className="index">
        <Header {...this.props} />
        <Route path={`${match.url}/:id`} component={NewsView} />
        <Footer />
      </div>
    )
  }
}
