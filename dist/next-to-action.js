/*!
 * name: @feizheng/next-to-action
 * description: Make an action callback for target.
 * homepage: https://github.com/afeiship/next-to-action
 * version: 1.0.0
 * date: 2020-06-24T15:02:49.445Z
 * license: MIT
 */

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

//# sourceMappingURL=next-to-action.js.map
