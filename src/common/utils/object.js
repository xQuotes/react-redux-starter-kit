Object.prototype.pushById = function(fileds) {
  this[fileds.id] = fileds
  return this
}
Object.prototype.deleteById = function(id) {
  delete this[id]
  return this
}
Object.prototype.updateById = function(fileds) {
  this[fileds['id']] = fileds
  return this
}
Object.prototype.getById = function(id) {
  return this[id]
}