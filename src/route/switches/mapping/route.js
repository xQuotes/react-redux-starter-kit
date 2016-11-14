module.exports = {
  path: 'mappings',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./index')['default'])
    })
  }
}