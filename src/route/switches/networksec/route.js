module.exports = {
  path: 'networksecs',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./index')['default'])
    })
  }
}