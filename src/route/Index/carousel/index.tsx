import * as React from 'react'
import { Carousel } from 'antd'

export default class Cacusel extends React.Component<any, any> {
  onChange(a: string, b: string, c: string): void {
    console.log(a, b, c)
  }
  render() {
    return (
      <Carousel afterChange={this.onChange.bind(this)}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
      </Carousel>
    )
  }
}
