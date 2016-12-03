# object-deep-assign
Like `Object.assign()` but deep 😱

```javascript
let deepAssign = require('object-deep-assign')
let o1 = {p1: {p11: 11}}
let o2 = {p1: {p12: 12}}
deepAssign(o1, o2)
// o1 = {p1: {p11:11, p12:12}}
```
