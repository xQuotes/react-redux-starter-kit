import { caculator } from 'Url'

module.exports = {
  path: `/${caculator}`,
  getComponent(nextState, cb) {
    require.ensure([], require => {
      cb(null, require('./index')['default'])
    })
  },
  getChildRoutes(location, callback) {
    require.ensure([], function(require) {
      callback(null, [
        require('./table/route'),
        require('./formula/route'),
        require('./user/route'),
        require('./news/route')
        /*file_append*/
      ])
    })
  }
}
