import {observer} from 'mobx-react'
import SearchForm from '../../components/search'

@observer
export default class Search extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {store, searchFields} = this.props
    const {searchDatas} = store

    let searchDataTitileServer = _.map(searchFields, (v, k)=> {
      return {
        name: k,
        label: v,
        fieldOptions: {
          initialValue: searchDatas[k]
        },
        placeholder: `请输入搜索${v}`
      }
    })
    return(
      <SearchForm store={store} title={searchDataTitileServer}/>
      )
  }
}
