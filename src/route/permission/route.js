module.exports = {
  path: 'permission',
  getComponent(nextState, cb) {
   require.ensure([], (require) => {
     cb(null, require('./index')['default'])
   })
  }
}