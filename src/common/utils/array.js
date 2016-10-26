import _ from 'lodash'
/* Array 操作
* var arr = ['concat', 'join', 'pop']
* concat() 连接两个或更多的数组，并返回结果。
* join() 把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔。
* pop() 删除并返回数组的最后一个元素
* push() 向数组的末尾添加一个或更多元素，并返回新的长度
* shift() 删除并返回数组的第一个元素
* unshift()  向数组的开头添加一个或更多元素，并返回新的长度。
* reverse() 颠倒数组中元素的顺序。
* slice() 从某个已有的数组返回选定的元素
* splice()  删除元素，并向数组添加新元素。 arr.splice(2, 0, 'shift')
* sort()  对数组的元素进行排序
* toString() 把数组转换为字符串，并返回结果
* toLocaleString()  把数组转换为本地数组，并返回结果。
* valueOf() 返回数组对象的原始值
*/

Array.prototype.delete = function (n) {
  if (n >= 0) {
    return this.slice(0, n).concat(this.slice(n + 1, this.length))
  }
  return this
}
Array.prototype.update = function (n, fileds) {
  if (n >= 0) {
    return this.slice(0, n).concat(fileds).concat(this.slice(n + 1, this.length))
  }
  return this
}
Array.prototype.getById = function (id) {
  return _.some(this, function(value, key) {
    console.log(value)
    console.log(key)
    if(value['id'] == id) {
      return value
    } else {
      return {}
    }
  })
}
Array.prototype.toObjectById = function() {
  if (this.length != 0) {
    return this.reduce(function(result, value, key) {
      result[value.id] = value
      return result
    }, {})
  } else {
    return {}
  }
}
Array.prototype.isEmpty = function() {
  return this.length == 0
}

