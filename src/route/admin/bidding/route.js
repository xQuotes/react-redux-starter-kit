module.exports = {
  path: 'bidding/list',
  getComponent(nextState, cb) {
    require.ensure([], require => {
      cb(null, require('./index')['default'])
    })
  }
}
