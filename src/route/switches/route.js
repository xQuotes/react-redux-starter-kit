import {switches} from 'Url'

module.exports = {
  path: `/${switches}`,
  component: require('./index')['default'],
  getChildRoutes(location, callback) {
    require.ensure([], function (require) {
      callback(null, [
        ...require('./backup/route'),
        require('./network/route'),
        require('./actions/route'),
        ...require('./mapping/route'),
        require('./vlans/route')
      ])
    })
  },
}