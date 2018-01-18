module.exports = {
  path: 'rate/list',
  getComponent(nextState, cb) {
    require.ensure([], require => {
      cb(null, require('./index')['default'])
    })
  }
}
