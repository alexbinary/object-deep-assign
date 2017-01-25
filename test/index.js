
let expect = require('chai').expect
let deepAssign = require('../src/index')

describe('object-deep-assign', function () {
  it('merges objects recursively', function () {
    // ## Setup
    let a = {
      p0: 1,
      p1: 1,
      p2: {},
      p3: {
        p0: 1,
        p1: 1,
        p2: {},
        p3: {}
      }
    }
    let b = {
      p0: 2,
      p1: {},
      p2: 2,
      p3: {
        p0: 2,
        p1: {},
        p2: 2,
        p3: {},
        pb1: 1,
        pb2: {}
      },
      pb1: 1,
      pb2: {}
    }
    // ## TEST
    let result = deepAssign(a, b)
    // ## Assert
    expect(result).to.deep.equal({
      p0: 2,
      p1: {},
      p2: 2,
      p3: {
        p0: 2,
        p1: {},
        p2: 2,
        p3: {},
        pb1: 1,
        pb2: {}
      },
      pb1: 1,
      pb2: {}
    })
    // ## End
  })
  it('copies object properties', function () {
    // ## Setup
    let a = {}
    let b = {p: {}}
    // ## TEST
    deepAssign(a, b)
    // ## Assert
    expect(a.p).to.not.equal(b.p)
    // ## End
  })
  it('accepts multiple sources', function () {
    // ## Setup
    let a = {p1: 1}
    let b = {p1: 2}
    let c = {p1: 3}
    // ## TEST
    let result = deepAssign(a, b, c)
    // ## Assert
    expect(result).to.deep.equal({p1: 3})
    // ## End
  })
  it('does not change sources', function () {
    // ## Setup
    let a = {p: 1}
    let b = {p: 2}
    let c = {p: 3}
    // ## TEST
    deepAssign(a, b, c)
    // ## Assert
    expect(b).to.deep.equal({p: 2})
    expect(c).to.deep.equal({p: 3})
    // ## End
  })
  it('changes target object', function () {
    // ## Setup
    let a = {p: 1}
    let b = {p: 2}
    // ## TEST
    deepAssign(a, b)
    // ## Assert
    expect(a).to.deep.equal({p: 2})
    // ## End
  })
  it('returns target object', function () {
    // ## Setup
    let a = {p: 1}
    let b = {p: 2}
    // ## TEST
    let result = deepAssign(a, b)
    // ## Assert
    expect(result).to.equal(a)
    // ## End
  })
})
