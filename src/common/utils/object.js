import _ from 'lodash'
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
/**
  * Object.prototype 
  * Object.assign()
  *
  *
  */
Object.prototype.pushById = function(fileds) {
  this[fileds.id] = fileds
  return this
}
Object.prototype.deleteById = function(id) {
  delete this[id]
  return this
}
Object.prototype.updateById = function(fileds) {
  //this[fileds['id']] = Object.assign(this[fileds['id']], fileds)
  this[fileds['id']] = _.assign(this[fileds['id']], fileds)
  return this
}
Object.prototype.getById = function(id) {
  return this[id]
}
Object.prototype.isEmpty = function() {
  if(Object.keys(this).length == 0) {
    return true
  } else {
    return false
  }
}