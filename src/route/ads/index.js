import React from 'react'

import {
  browserHistory
} from 'react-router'

export default class Ads extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    var intervalid = setInterval(function () {
      browserHistory.push('/index')
      clearInterval(intervalid)
    }.bind(this), 5000);
  }
  render() {
    return(
      <div>
        Ads
      </div>
      )
  }
}