
let expect = require('chai').expect
let deepAssign = require('../src/index')

describe('object-deep-assign', function () {
  describe('API', function () {
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
    it('change target object', function () {
      // ## Setup
      let a = {p1: 1}
      let b = {p1: 2}
      let aClone = Object.assign({}, a)
      // ## TEST
      deepAssign(a, b)
      // ## Assert
      expect(a).to.not.deep.equal(aClone)
      // ## End
    })
    it('does not change source objects', function () {
      // ## Setup
      let a = {p1: 1}
      let b = {p1: 2}
      let c = {p1: 3}
      let bClone = Object.assign({}, b)
      let cClone = Object.assign({}, c)
      // ## TEST
      deepAssign(a, b, c)
      // ## Assert
      expect(b).to.deep.equal(bClone)
      expect(c).to.deep.equal(cClone)
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
  describe('core', function () {
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
  })
})
