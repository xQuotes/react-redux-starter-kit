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
        require('./table/route'),
        require('./db/route'),
        require('./mulsearch/route'),
        require('./quicksearch/route'),
        require('./mysetting/route'),
        require('./ipmanage/route'),
        require('./networkmanage/route'),
        require('./connection/route'),
        require('./idcmessage/route'),
        require('./cabinetmessage/route'),
        require('./spaceshow/route'),
        require('./production/route'),
        require('./devicuse/route'),
        require('./servermessage/route'),
        require('./applymessage/route'),
        require('./softwarepackage/route'),
        require('./authsearch/route'),
        require('./instruction/route'),
        /*file_append*/
      ])
    })
  },
}