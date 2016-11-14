module.exports = {
  path: 'login',
  getComponent(nextState, cb) {
   require.ensure([], (require) => {
     cb(null, require('./index')['default'])
   })
  },
  // getIndexRoute(location, callback) {
  //   require.ensure([], function (require) {
  //     callback(null, require('./mainPage/route'))
  //   })
  // },
  // getChildRoutes(location, callback) {
  //   require.ensure([], function (require) {
  //     callback(null, [
  //       require('../login/route'),
  //       require('../logout/route'),
  //       require('../register/route'),
  //       require('../setting/route'),
  //       require('./position/route')
  //     ])
  //   })
  // }
}