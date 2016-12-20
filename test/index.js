
let expect = require('chai').expect
let deepAssign = require('../src/index')

describe('object-deep-assign', function () {
  it('overwrite scalar root key', function () {
    // ## Setup
    let a = {p1: 1}
    let b = {p1: 2}
    // ## TEST
    deepAssign(a, b)
    // ## Assert
    expect(a).to.deep.equal({p1: 2})
    // ## End
  })
  it('add scalar root key', function () {
    // ## Setup
    let a = {p1: 1}
    let b = {p2: 2}
    // ## TEST
    deepAssign(a, b)
    // ## Assert
    expect(a).to.deep.equal({p1: 1, p2: 2})
    // ## End
  })
  it('add object root key', function () {
    // ## Setup
    let a = {p1: 1}
    let b = {p2: {p: 2}}
    // ## TEST
    deepAssign(a, b)
    // ## Assert
    expect(a).to.deep.equal({p1: 1, p2: {p: 2}})
    // ## End
  })
  it('overwrite scalar nested key', function () {
    // ## Setup
    let a = {p: {p1: 1}}
    let b = {p: {p1: 2}}
    // ## TEST
    deepAssign(a, b)
    // ## Assert
    expect(a).to.deep.equal({p: {p1: 2}})
    // ## End
  })
  it('add scalar nested key', function () {
    // ## Setup
    let a = {p: {p1: 1}}
    let b = {p: {p2: 2}}
    // ## TEST
    deepAssign(a, b)
    // ## Assert
    expect(a).to.deep.equal({p: {p1: 1, p2: 2}})
    // ## End
  })
  it('add object nested key', function () {
    // ## Setup
    let a = {p: {p1: 1}}
    let b = {p: {p2: {p: 2}}}
    // ## TEST
    deepAssign(a, b)
    // ## Assert
    expect(a).to.deep.equal({p: {p1: 1, p2: {p: 2}}})
    // ## End
  })
  it('accept more than 1 source', function () {
    // ## Setup
    let a = {p1: 1}
    let b = {p1: 2}
    let c = {p1: 3}
    // ## TEST
    deepAssign(a, b, c)
    // ## Assert
    expect(a).to.deep.equal({p1: 3})
    // ## End
  })
  it('does not change source objects', function () {
    // ## Setup
    let a = {p1: 1}
    let b = {p1: 2}
    let bClone = Object.assign({}, b)
    // ## TEST
    deepAssign(a, b)
    // ## Assert
    expect(b).to.deep.equal(bClone)
    // ## End
  })
  it('return target object', function () {
    // ## Setup
    let a = {p1: 1}
    let b = {p1: 2}
    // ## TEST
    let o = deepAssign(a, b)
    // ## Assert
    expect(o).to.equal(a)
    // ## End
  })
})
