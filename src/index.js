
function deepAssign () {
  var target = arguments[0]
  var sources = Array.prototype.slice.call(arguments, 1)
  for (var i = 0; i < sources.length; i++) {
    target = extend(target, sources[i])
  }
  return target
}

function extend (target, source) {
  for (var i in source) {
    if (typeof source[i] === 'object') {
      if (typeof target[i] === 'object') {
        target[i] = extend(target[i], source[i])
      } else {
        target[i] = extend({}, source[i])
      }
    } else {
      target[i] = source[i]
    }
  }
  return target
}

module.exports = deepAssign
