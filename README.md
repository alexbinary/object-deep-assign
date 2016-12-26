# object-deep-assign

Like `Object.assign()` but deep 😱

[![GitHub release](https://img.shields.io/github/release/alexbinary/object-deep-assign.svg?label="latest release")](https://github.com/alexbinary/object-deep-assign/releases/latest)

## Install

This package is not hosted on the NPM registry.
You must install directly from GitHub using the npm or yarn client :

```bash
$ npm install alexbinary/object-deep-assign
# or
$ yarn add alexbinary/object-deep-assign
```

This will install the latest version from the `master` branch, which sould always be the latest stable version.

## Usage

```javascript
let deepAssign = require('alexbinary.object-deep-assign')

let o1 = {p1: {p11: 11}}
let o2 = {p1: {p12: 12}}

deepAssign(o1, o2)
// o1 = {p1: {p11:11, p12:12}}
```

## Documentation

```javascript
let deepAssign = require('alexbinary.object-deep-assign')
```

### deepAssign(target, ...sources)

Copy properties of `sources` onto `target`. Return `target`.

Scalar properties with same name are replaced. Object properties are merged recursively. Sources are merged sequentially into target from left to right.

## Licence

MIT
