module.exports = {
  path: 'shuitubaochi/list',
  getComponent(nextState, cb) {
    require.ensure([], require => {
      cb(null, require('./index')['default'])
    })
  }
}
