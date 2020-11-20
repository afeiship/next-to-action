/*!
 * name: @jswork/next-to-action
 * description: Make an action callback for target.
 * homepage: https://github.com/afeiship/next-to-action
 * version: 1.0.0
 * date: 2020-11-20 21:07:05
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.toAction = function (inAction) {
    return function (target) {
      return target[inAction]();
    };
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.toAction;
  }
})();
