/**
 * @author Piotr Kowalski <piecioshka@gmail.com>
 * @fileOverview Underscore.js slice array to bigger - levels array
 * @see https://github.com/piecioshka/underscore.nested
 * @requires {@link http://underscorejs.org/|Underscore.js}
 * @license The MIT License
 * @example:
 *   _.nested([1, 2, 3, 4, 5], 2);
 *   // [[1, 2], [3, 4], [5]]
 */
/*jslint nomen: true, indent: 4 */
/*global _ */
;(function (global) {
  'use strict';

  // imports
  var _ = global._;

  _.mixin({
    nested: function (list, size) {
      list = list || [];
      size = size || 2;

      var nestedList = [];
      var nestedItem = [];

      _.each(list, function (item) {
        nestedItem.push(item);

        if (_.size(nestedItem) === size) {
          nestedList.push(nestedItem);
          nestedItem = [];
        }
      });

      if (_.size(nestedItem) !== 0) {
        nestedList.push(nestedItem);
      }

      return nestedList;
    }
  });

}(this));
