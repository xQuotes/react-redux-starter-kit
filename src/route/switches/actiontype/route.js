module.exports = {
  path: 'actiontypes',
  getComponent(nextState, cb) {
   require.ensure([], (require) => {
     cb(null, require('./index')['default'])
   })
  }
}