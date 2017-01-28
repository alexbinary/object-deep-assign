
function deepAssign () {
  var target = arguments[0]
  var sources = Array.prototype.slice.call(arguments, 1)
  for (var i = 0; i < sources.length; i++) {
    target = merge(target, sources[i])
  }
  return target
}

function merge (target, source) {
  if (typeof source === 'object') {
    if (typeof target === 'object') {
      return extend(target, source)
    } else {
      return extend({}, source)
    }
  } else {
    return source
  }
}

function extend (target, source) {
  for (var i in source) {
    target[i] = merge(target[i], source[i])
  }
  return target
}

module.exports = deepAssign
