import {switches} from 'Url'

module.exports = {
  path: `/${switches}`,
  component: require('./index')['default'],
  getChildRoutes(location, callback) {
    require.ensure([], function (require) {
      callback(null, [
        ...require('./backup/route'),
        require('./vlan/route'),

        require('./mapping/route'),
        require('./server/route'),
        require('./networksub/route'),

        require('./network/route'),
        require('./actions/route')
      ])
    })
  },
}