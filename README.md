# object-deep-assign

Like `Object.assign()` but deep 😱

[![npm](https://img.shields.io/npm/v/@alexbinary/object-deep-assign.svg)](https://www.npmjs.com/package/@alexbinary/object-deep-assign)
[![GitHub release](https://img.shields.io/github/release/alexbinary/object-deep-assign.svg?label="github")](https://github.com/alexbinary/object-deep-assign/releases/latest)
[![Build Status](https://travis-ci.org/alexbinary/object-deep-assign.svg)](https://travis-ci.org/alexbinary/object-deep-assign)
[![dependencies Status](https://david-dm.org/alexbinary/object-deep-assign/status.svg)](https://david-dm.org/alexbinary/object-deep-assign)
[![devDependencies Status](https://david-dm.org/alexbinary/object-deep-assign/dev-status.svg)](https://david-dm.org/alexbinary/object-deep-assign?type=dev)

`object-deep-assign` merges objects recursively with an API similar to `Object.assign()`.

```javascript
let deepAssign = require('@alexbinary/object-deep-assign')

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
let result = deepAssign(a, b)
// {
//   p0: 2,
//   p1: {},
//   p2: 2,
//   p3: {
//     p0: 2,
//     p1: {},
//     p2: 2,
//     p3: {},
//     pb1: 1,
//     pb2: {}
//   },
//   pb1: 1,
//   pb2: {}
// }
```

## Compatibility

The code is written in plain ES2015, so it does not run on node before version 6.

## Install

Install with [npm](https://www.npmjs.com) or [yarn](https://yarnpkg.com) :

```bash
$ npm install @alexbinary/object-deep-assign
# or
$ yarn add @alexbinary/object-deep-assign
```

## Documentation

```javascript
let deepAssign = require('@alexbinary/object-deep-assign')
```

### deepAssign(target, ...sources)

Copies properties of `sources` onto `target`.

Scalar properties with same name are replaced. Object properties are merged recursively. Sources are merged sequentially into target from left to right.

Returns `target`.

## Tests

Tests are written with [mocha](http://mochajs.org) and [chai](http://chaijs.com). To run the tests do :
```bash
$ npm test
```

## Contributions

Contributions are welcome, feel free to [open issues](https://github.com/alexbinary/object-deep-assign/issues) and [submit pull requests](https://github.com/alexbinary/object-deep-assign/pulls) on [GitHub](https://github.com/alexbinary/object-deep-assign) !

## Related

- [object-assign-deep](https://www.npmjs.com/package/object-assign-deep) by [saikojosh](https://npmjs.com/~saikojosh)
- [object-extender](https://www.npmjs.com/package/object-extender) by [saikojosh](https://npmjs.com/~saikojosh)
- [deep-assign](https://www.npmjs.com/package/deep-assign) by [sindresorhus](https://npmjs.com/~sindresorhus)
- [assign-deep](https://www.npmjs.com/package/assign-deep) by [jonschlinkert](https://npmjs.com/~jonschlinkert)
- [merge-deep](https://www.npmjs.com/package/merge-deep) by [jonschlinkert](https://npmjs.com/~jonschlinkert)
- [mixin-deep](https://www.npmjs.com/package/mixin-deep) by [jonschlinkert](https://npmjs.com/~jonschlinkert)
- [mini-deep-assign](https://www.npmjs.com/package/mini-deep-assign) by [alykoshin](https://npmjs.com/~alykoshin)
- [object-merge](https://www.npmjs.com/package/object-merge) by [kastor](https://npmjs.com/~kastor)

## Licence

MIT
