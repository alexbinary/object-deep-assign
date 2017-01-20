
function deepAssign (target, ...sources) {
  for (let i = 0; i < sources.length; i++) {
    target = extend(target, sources[i])
  }
  return target
}

function extend (target, source) {
  for (let i in source) {
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
