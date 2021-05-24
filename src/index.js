(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.toAction = function (inAction) {
    return function (target) {
      return target[inAction] ? target[inAction]() : target;
    };
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.toAction;
  }
})();
