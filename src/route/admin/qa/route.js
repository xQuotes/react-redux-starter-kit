module.exports = [
  {
    path: 'QA/list',
    getComponent(nextState, cb) {
      require.ensure([], require => {
        cb(null, require('./index')['default'])
      })
    }
  },
  {
    path: 'QA/add',
    getComponent(nextState, cb) {
      require.ensure([], require => {
        cb(null, require('./infoAdd')['default'])
      })
    }
  },
  {
    path: 'QA/add(/:id)',
    getComponent(nextState, cb) {
      require.ensure([], require => {
        cb(null, require('./infoAdd')['default'])
      })
    }
  }
]
