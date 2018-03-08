import CaculatorStore from '../route/Caculator/store'
import StandardStore from '../route/Index/standard/store'
import SearchStore from '../route/Search/store'
import MyStore from '../route/Login/store'

export default {
  caculatorStore: new CaculatorStore(),
  standardStore: new StandardStore(),
  searchStore: new SearchStore(),
  myStore: new MyStore()
}
