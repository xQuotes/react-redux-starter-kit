module.exports = {
  path: 'servers',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./index')['default'])
    })
  }
}