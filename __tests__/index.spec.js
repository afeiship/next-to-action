(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.toAction', function () {
      const trimer = nx.toAction('trim');
      const list = ['  a', 'b  ', ' c '];
      const res = list.map(trimer);

      expect(res).toEqual(['a', 'b', 'c']);
    });
  });
})();
