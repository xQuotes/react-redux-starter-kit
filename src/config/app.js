var config = {}

config.banner = 'This file is created by fooying@qq.com'

config.entries = {
  index: {
    entry: 'src/app.js',
    template: 'src/template/index.html',

    filename: 'index.html',
    title: 'CMDB super',
    description: '',
    keywords: ''
  }
}

config.proxy = {
  '/web/*': 'http://172.30.205.224:8081'
}

module.exports = config;