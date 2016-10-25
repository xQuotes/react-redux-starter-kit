module.exports = [{
  path: 'backups',
  component: require('./index')['default']
}, {
  path: 'backup/:id',
  component: require('./view')['default']
}]