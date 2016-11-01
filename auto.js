require("babel-register")
var fs = require('fs')
var shell = require('shelljs')
var _ = require('lodash')

var demoFunc = 'demofunc'
var NewFunc = 'Newfunc'
var newFunc = NewFunc.toLowerCase()
var replaceString = '/*file_append*/'
var ReplaceString = '/*File_append*/'
var replaceRg = /\/\*file_append\*\//g
var ReplaceRg = /\/\*File_append\*\//g
var routeBaseUrl = `src/route/switches`

// 1. API './src/api/index.js'
var apiReplaceData = `post${NewFunc}`+': `${url}/'+`sw_config_${newFunc}`+'/addInfo`,\n';
  apiReplaceData += `  get${NewFunc}`+': `${url}/'+`sw_config_${newFunc}`+'/getList`,\n';
  apiReplaceData += `  get${NewFunc}`+': `${url}/'+`sw_config_${newFunc}`+'/getInfo`,\n';
  apiReplaceData += `  get${NewFunc}`+': `${url}/'+`sw_config_${newFunc}`+'/deleteInfo`,\n';
  apiReplaceData += `  get${NewFunc}`+': `${url}/'+`sw_config_${newFunc}`+'/updateInfo`,\n';
  apiReplaceData += '\n';
  apiReplaceData += replaceString;
fs.readFile('./src/api/index.js', 'utf8', (err, data) => {
  if (err) throw err
  var buffString = data.replace(replaceRg, apiReplaceData)
  fs.writeFile('./src/api/index.js', buffString, 'utf-8', (err, data) => {
    if (err) throw err
    console.log('1.', 'api 添加成功！')
  })
});

// 2. route './src/route/switches'
var fileMap = [
  'add.js',
  'index.js',
  'route.js',
  'search.js',
  'store.js'
]
shell.mkdir('-p', `./${routeBaseUrl}/${newFunc}`)
_.map(fileMap, (v, k) => {
  fs.readFile(`./${routeBaseUrl}/${demoFunc}/${v}`, 'utf8', (err, data) => {
    if (err) throw err
    var buffString = data.replace(replaceRg, newFunc)
    buffString = buffString.replace(ReplaceRg, NewFunc)
    fs.writeFile(`./${routeBaseUrl}/${newFunc}/${v}`, buffString, 'utf-8', (err, data) => {
      if (err) throw err
      console.log('2.', 'route 下新功能添加成功！')
    })
  });
})

// 3. routefile './src/route/route.js'
var routeReplaceData = "require('./"+`${newFunc}`+"/route'),\n";
  routeReplaceData += '        ';
  routeReplaceData += replaceString;

fs.readFile(`./${routeBaseUrl}/route.js`, 'utf8', (err, data) => {
  if (err) throw err
  var buffString = data.replace(replaceRg, routeReplaceData)
  fs.writeFile(`./${routeBaseUrl}/route.js`, buffString, 'utf-8', (err, data) => {
    if (err) throw err
    console.log('3.', 'route 路由添加成功！')
  })
});

// 4. store './src/stores/index.js'
var storeReplaceData = `${newFunc}Store: `;
  storeReplaceData += "require('";
  storeReplaceData += `../route/switches/${newFunc}/store`;
  storeReplaceData += "')['default'].fromJS(),\n";
  storeReplaceData += `  ${replaceString}`;

fs.readFile(`./src/stores/index.js`, 'utf8', (err, data) => {
  if (err) throw err
  var buffString = data.replace(replaceRg, storeReplaceData)
  fs.writeFile(`./src/stores/index.js`, buffString, 'utf-8', (err, data) => {
    if (err) throw err
    console.log('4.', 'mobx store 修改成功！')
  })
});
