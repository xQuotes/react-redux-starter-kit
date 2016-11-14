module.exports = {
  path: 'vlans',
  getComponent(nextState, cb) {
   require.ensure([], (require) => {
     cb(null, require('./index')['default'])
   })
  }
}