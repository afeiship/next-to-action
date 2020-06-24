const nx = require('@feizheng/next-js-core2');
require('../src/next-to-action');

describe('api.basic test', () => {
  test('nx.toAction use trim should return an trime action', function () {
    var trimer = nx.toAction('trim');
    var list = [
      '  a',
      'b  ',
      ' c '
    ];

    var res = list.map(trimer);
    expect(res).toEqual(['a', 'b', 'c'])
  });
});
