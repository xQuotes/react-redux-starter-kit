import {cmdb} from 'Url'

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
        /*file_append*/
      ])
    })
  },
}