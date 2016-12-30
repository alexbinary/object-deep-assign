# object-deep-assign

Like `Object.assign()` but deep 😱

[![npm](https://img.shields.io/npm/v/@alexbinary/object-deep-assign.svg)](https://www.npmjs.com/package/@alexbinary/object-deep-assign)
[![GitHub release](https://img.shields.io/github/release/alexbinary/object-deep-assign.svg?label="github")](https://github.com/alexbinary/object-deep-assign/releases/latest)
[![Build Status](https://travis-ci.org/alexbinary/object-deep-assign.svg)](https://travis-ci.org/alexbinary/object-deep-assign)
[![dependencies Status](https://david-dm.org/alexbinary/object-deep-assign/status.svg)](https://david-dm.org/alexbinary/object-deep-assign)
[![devDependencies Status](https://david-dm.org/alexbinary/object-deep-assign/dev-status.svg)](https://david-dm.org/alexbinary/object-deep-assign?type=dev)

Ever needed to do `Object.assign()` but couldn't because you had nested objects that got overwritten instead of merged ?

`object-deep-assign` merges objects recursively and can work with any depth. It has an API similar to `Object.assign()`.

`object-deep-assign` comes handy when you need to deal with e.g. configuration objects when you have a layered config system (e.g. a default, global and local config).

```javascript
let objectDeepAssign = require('@alexbinary/object-deep-assign')

let default = {
  build: true,
  notify: {
    on_success: false,
    on_failure: true,
    options: {
      admin_only: true
      retry: 1
    }
  }
}

let global = {
  notify: {
    on_success: true
    options: {
      retry: 2
    }
  }
}

let user = {
  notify: {
    options:
      admin_only: false
      retry: 3
  },
  deploy: true
}

let config = objectDeepAssign({}, default, global, user)
// config = {
//   build: true,
//   deploy: true,
//   notify: {
//     on_success: true,
//     on_failure: true,
//     options: {
//       admin_only: false,
//       retry: 3
//     }
//   }
// }
```

## Install

Install with [npm](https://www.npmjs.com) or [yarn](https://yarnpkg.com) :

```bash
$ npm install @alexbinary/object-deep-assign
# or
$ yarn add @alexbinary/object-deep-assign
```

## Documentation

```javascript
let objectDeepAssign = require('@alexbinary/object-deep-assign')
```

### objectDeepAssign(target, ...sources)

Copies properties of `sources` onto `target`.

Scalar properties with same name are replaced. Object properties are merged recursively. Sources are merged sequentially into target from left to right.

Returns `target`.

## Tests

Tests are written with [mocha](http://mochajs.org) and [chai](http://chaijs.com). To run the tests do :
```bash
$ npm test  # or `yarn test`
```

To run the test in watch mode do :
```bash
$ npm testw # or `yarn testw`
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
