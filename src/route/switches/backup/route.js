module.exports = [{
  path: 'backups',
  getComponent(nextState, cb) {
   require.ensure([], (require) => {
     cb(null, require('./index')['default'])
   })
  }
}, {
  path: 'backup/:id',
  getComponent(nextState, cb) {
   require.ensure([], (require) => {
     cb(null, require('./view')['default'])
   })
  }
}]