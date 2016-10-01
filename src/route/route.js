import {admin} from 'Url'

module.exports = {
  path: `/${admin}`,
  component: require('./index')['default'],
  // getChildRoutes(location, callback) {
  //   require.ensure([], function (require) {
  //     callback(null, [
  //       require('./reports/route'),
  //       require('./report/route')
  //     ])
  //   })
  // },
}
