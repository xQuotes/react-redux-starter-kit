import React from 'react'

import {
  hashHistory
} from 'react-router'
import Url from 'Url'

import './ads.less'

export default class Ads extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    var intervalid = setInterval(function () {
      hashHistory.push(Url.index)
      clearInterval(intervalid)
    }.bind(this), 1000);
  }
  render() {
    return(
      <div className="ads">
        Ads
      </div>
      )
  }
}