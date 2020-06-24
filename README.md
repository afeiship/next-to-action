# next-to-action
> Make an action callback for target.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @feizheng/next-to-action
```

## usage
```js
import '@feizheng/next-to-action';

const trimer = nx.toAction('trim');
const list = [
  '  a',
  'b  ',
  ' c '
];

const res = list.map(trimer);

// ['a','b','c'];
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-to-action/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@feizheng/next-to-action
[version-url]: https://npmjs.org/package/@feizheng/next-to-action

[license-image]: https://img.shields.io/npm/l/@feizheng/next-to-action
[license-url]: https://github.com/afeiship/next-to-action/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/next-to-action
[size-url]: https://github.com/afeiship/next-to-action/blob/master/dist/next-to-action.min.js

[download-image]: https://img.shields.io/npm/dw/@feizheng/next-to-action
[download-url]: https://www.npmjs.com/package/@feizheng/next-to-action
