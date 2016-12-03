
let expect = require('chai').expect
let deepAssign = require('../src/index')

describe('object-deep-assign', function () {
  it('works', function () {
    let a = {p0: 1, p1a: 11, p2: {p2a: 21}}
    let b = {p0: 2, p1b: 12, p2: {p2b: 22}}
    let c = {p0: 3, p1c: 13, p2: {p2c: 23}, p3: {p3c: 33}}
    let original_b = Object.assign({}, b)
    let original_c = Object.assign({}, c)
    let d = deepAssign(a, b, c)
    expect(a).to.deep.equal({p0: 3, p1a: 11, p1b: 12, p1c: 13, p2: {p2a: 21, p2b: 22, p2c: 23}, p3: {p3c: 33}})
    expect(b).to.deep.equal(original_b)
    expect(c).to.deep.equal(original_c)
    expect(d).to.equal(a)
  })
})
