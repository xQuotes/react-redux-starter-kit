module.exports = {
  path: 'tool/list',
  getComponent(nextState, cb) {
    require.ensure([], require => {
      cb(null, require('./index')['default'])
    })
  }
}
