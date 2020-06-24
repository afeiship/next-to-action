(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.toAction = function (inAction) {
    return function (target) {
      return target[inAction]();
    };
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.toAction;
  }
})();
