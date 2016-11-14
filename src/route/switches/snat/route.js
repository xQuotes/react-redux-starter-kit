module.exports = {
  path: 'snats',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./index')['default'])
    })
  }
}