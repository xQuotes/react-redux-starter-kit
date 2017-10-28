import * as React from 'react'
import { Carousel } from 'antd'
import './carousel.less'

export default class Cacusel extends React.Component<any, any> {
  onChange(a: string, b: string, c: string): void {
    console.log(a, b, c)
  }
  render() {
    return (
      <Carousel afterChange={this.onChange.bind(this)} className="carousel">
        <div className="carousel-item">
          <h3 className="carousel-item-content" />
        </div>
        <div className="carousel-item">
          <h3 className="carousel-item-content" />
        </div>
        <div className="carousel-item">
          <h3 className="carousel-item-content" />
        </div>
        <div className="carousel-item">
          <h3 className="carousel-item-content" />
        </div>
      </Carousel>
    )
  }
}
