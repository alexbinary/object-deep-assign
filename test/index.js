
let expect = require('chai').expect
let deepAssign = require('../src/index')

describe('object-deep-assign', function () {
  describe('core', function () {
    it('new scalar', function () {
      // ## Setup
      let a = {p1: 1}
      let b = {p2: 2}
      // ## TEST
      deepAssign(a, b)
      // ## Assert
      expect(a).to.deep.equal({p1: 1, p2: 2})
      // ## End
    })
    it('new object', function () {
      // ## Setup
      let a = {p1: 1}
      let b = {p2: {p: 2}}
      // ## TEST
      deepAssign(a, b)
      // ## Assert
      expect(a).to.deep.equal({p1: 1, p2: {p: 2}})
      // ## End
    })
    it('scalar on scalar', function () {
      // ## Setup
      let a = {p1: 1}
      let b = {p1: 2}
      // ## TEST
      deepAssign(a, b)
      // ## Assert
      expect(a).to.deep.equal({p1: 2})
      // ## End
    })
    it('object on scalar', function () {
      // ## Setup
      let a = {p1: 1}
      let b = {p1: {p: 2}}
      // ## TEST
      deepAssign(a, b)
      // ## Assert
      expect(a).to.deep.equal({p1: {p: 2}})
      // ## End
    })
    it('scalar on object', function () {
      // ## Setup
      let a = {p1: {p: 1}}
      let b = {p1: 2}
      // ## TEST
      deepAssign(a, b)
      // ## Assert
      expect(a).to.deep.equal({p1: 2})
      // ## End
    })
    describe('object on object', function () {
      it('new scalar', function () {
        // ## Setup
        let a = {p: {p1: 1}}
        let b = {p: {p2: 2}}
        // ## TEST
        deepAssign(a, b)
        // ## Assert
        expect(a).to.deep.equal({p: {p1: 1, p2: 2}})
        // ## End
      })
      it('new object', function () {
        // ## Setup
        let a = {p: {p1: 1}}
        let b = {p: {p2: {p: 2}}}
        // ## TEST
        deepAssign(a, b)
        // ## Assert
        expect(a).to.deep.equal({p: {p1: 1, p2: {p: 2}}})
        // ## End
      })
      it('scalar on scalar', function () {
        // ## Setup
        let a = {p: {p1: 1}}
        let b = {p: {p1: 2}}
        // ## TEST
        deepAssign(a, b)
        // ## Assert
        expect(a).to.deep.equal({p: {p1: 2}})
        // ## End
      })
      it('object on scalar', function () {
        // ## Setup
        let a = {p: {p1: 1}}
        let b = {p: {p1: {p: 2}}}
        // ## TEST
        deepAssign(a, b)
        // ## Assert
        expect(a).to.deep.equal({p: {p1: {p: 2}}})
        // ## End
      })
      it('scalar on object', function () {
        // ## Setup
        let a = {p: {p1: {p: 1}}}
        let b = {p: {p1: 2}}
        // ## TEST
        deepAssign(a, b)
        // ## Assert
        expect(a).to.deep.equal({p: {p1: 2}})
        // ## End
      })
    })
  })
  describe('API', function () {
    it('multiple sources', function () {
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
    it('change target', function () {
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
    it('do not change sources', function () {
      // ## Setup
      let a = {p1: 1}
      let b = {p1: 2, p2: {p21: 2}}
      let c = {p1: 3, p2: {p21: 3}}
      // ## TEST
      deepAssign(a, b, c)
      // ## Assert
      expect(b).to.deep.equal({p1: 2, p2: {p21: 2}})
      expect(c).to.deep.equal({p1: 3, p2: {p21: 3}})
      // ## End
    })
    it('return target', function () {
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
})
