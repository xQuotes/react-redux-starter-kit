import { caculator } from 'Url'
import Auth from 'Auth'

module.exports = {
  path: `/${caculator}`,
  // onEnter: (nextState, replace) => {
  //   Auth.redirectToLogin(nextState, replace)
  // },
  getComponent(nextState, cb) {
    require.ensure([], require => {
      cb(null, require('./index')['default'])
    })
  },
  getChildRoutes(location, callback) {
    require.ensure([], function(require) {
      callback(null, [
        require('./caculator/route'), // 计算器类型
        require('./mapdata/route'), // 地图类型
        require('./table/route'),
        require('./formula/route'),
        require('./user/route'),
        require('./guidedata/route'),
        require('./guide/route'),
        require('./news/route'),
        ...require('./qa/route')
        /*file_append*/
      ])
    })
  }
}
