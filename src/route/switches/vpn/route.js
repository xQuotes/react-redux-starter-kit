module.exports = {
  path: 'vpns',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./index')['default'])
    })
  }
}