import * as React from 'react'

export default class Footer extends React.Component<{}, {}> {
  render() {
    return (
      <div style={{
        height: '800px',
        backgroundColor: 'rgb(243, 244, 246)',
        textAlign: 'center',
        lineHeight: '600px',
        fontSize: '36px'
      }}>
        正在努力建设中...
      </div>
    )
  }
}
