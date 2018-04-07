import * as React from 'react'
import { inject, observer } from 'mobx-react'
import queryString from 'query-string'

import Header from '../../components/Header/'
import Footer from '../../components/Footer/'


import './search.less'

@inject('searchStore')
@observer
export default class Caculator extends React.Component<any, {}> {
  componentWillMount() {
    const { searchStore, location } = this.props
    const state = queryString.parse(location.search) || {}
    // searchStore.selectCostindex(state.typeName, state.typeName)
    searchStore.getCostindex({
      putaway: 1,
      type: 1,
      typeName: state.typeName
    })
  }
  onChangeData = (type: any) => () => {
    const { searchStore } = this.props
    // searchStore.selectCostindex(type, type)
    searchStore.getCostindex({
      putaway: 1,
      type: 1,
      typeName: type
    })
  }
  render() {
    const { location } = this.props

    const state = queryString.parse(location.search)

    console.log(state)
    return (
      <div>
        <Header {...this.props} />
        <div className="search">
          <div className="search-main">
            <div style={{
              backgroundColor: '#fff',
              marginTop: '50px',
              marginBottom: '50px'
            }}>
              <iframe
                src={state.url}
                width="100%"
                height="1800px"
                frameBorder="0"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div >
    )
  }
}
