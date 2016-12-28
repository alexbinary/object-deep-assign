# object-deep-assign

Like `Object.assign()` but deep 😱

[![npm](https://img.shields.io/npm/v/@alexbinary/object-deep-assign.svg)](https://www.npmjs.com/package/@alexbinary/object-deep-assign)
[![GitHub release](https://img.shields.io/github/release/alexbinary/object-deep-assign.svg?label="github")](https://github.com/alexbinary/object-deep-assign/releases/latest)
[![Build Status](https://travis-ci.org/alexbinary/object-deep-assign.svg)](https://travis-ci.org/alexbinary/object-deep-assign)
[![dependencies Status](https://david-dm.org/alexbinary/object-deep-assign/status.svg)](https://david-dm.org/alexbinary/object-deep-assign)
[![devDependencies Status](https://david-dm.org/alexbinary/object-deep-assign/dev-status.svg)](https://david-dm.org/alexbinary/object-deep-assign?type=dev)

## Install

Install with [npm](https://www.npmjs.com) or [yarn](https://yarnpkg.com) :

```bash
$ npm install @alexbinary/object-deep-assign
# or
$ yarn add @alexbinary/object-deep-assign
```

## Usage

```javascript
let deepAssign = require('@alexbinary/object-deep-assign')

let o1 = {p1: {p11: 11}}
let o2 = {p1: {p12: 12}}

deepAssign(o1, o2)
// o1 = {p1: {p11:11, p12:12}}
```

## Documentation

```javascript
let deepAssign = require('@alexbinary/object-deep-assign')
```

### deepAssign(target, ...sources)

Copies properties of `sources` onto `target`.

Scalar properties with same name are replaced. Object properties are merged recursively. Sources are merged sequentially into target from left to right.

Returns `target`.

## Licence

MIT
