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
        require('./networksec/route'),
        require('./dnet/route'),
        require('./snet/route'),
        require('./vpn/route'),
        require('./wireless/route'),
        require('./server/route'),
        require('./datacenter/route'),
        require('./specialline/route'),
        require('./networkequipment/route'),

        require('./network/route'),
        require('./actiontype/route'),
        require('./brand/route'),
        require('./accountmanager/route'),
        /*file_append*/
      ])
    })
  },
}