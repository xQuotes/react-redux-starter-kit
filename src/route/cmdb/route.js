import {cmdb} from '../url'

module.exports = {
  path: `/${cmdb}`,
  getComponent(nextState, cb) {
   require.ensure([], (require) => {
     cb(null, require('./index')['default'])
   })
  },
  getChildRoutes(location, callback) {
    require.ensure([], function (require) {
      callback(null, [
        require('./log/route'),
        require('./permission/route'),
        require('./table/route'),
        /*file_append*/
      ])
    })
  },
}