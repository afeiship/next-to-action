# next-to-action
> Make an action callback for target.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-to-action
```

## usage
```js
import '@jswork/next-to-action';

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

[version-image]: https://img.shields.io/npm/v/@jswork/next-to-action
[version-url]: https://npmjs.org/package/@jswork/next-to-action

[license-image]: https://img.shields.io/npm/l/@jswork/next-to-action
[license-url]: https://github.com/afeiship/next-to-action/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-to-action
[size-url]: https://github.com/afeiship/next-to-action/blob/master/dist/next-to-action.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-to-action
[download-url]: https://www.npmjs.com/package/@jswork/next-to-action
