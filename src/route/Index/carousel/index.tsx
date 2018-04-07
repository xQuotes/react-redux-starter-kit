import * as React from 'react'
import { Carousel } from 'antd'
import { Link } from 'react-router-dom'

import Urls from '../../../common/url'

import './carousel.less'

export default class Cacusel extends React.Component<any, any> {
  onChange(a: string, b: string, c: string): void {
    console.log(a, b, c)
  }
  render() {
    return (
      <Carousel afterChange={this.onChange.bind(this)} className="carousel">
        <div className="carousel-item">
          <img src={require('../../../common/images/banner/banner1.png')} />
          <Link to={Urls.caculator + '?type=701'} className="banner-link">工程估价</Link>
        </div>
        <div className="carousel-item">
          <img src={require('../../../common/images/banner/banner2.png')} />
          <Link to={Urls.caculator + '?type=701'} className="banner-link">工程估价</Link>
        </div>
      </Carousel>
    )
  }
}
