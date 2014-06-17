/**
 * @author Piotr Kowalski <piecioshka@gmail.com>
 * @fileOverview Underscore.js slice array to bigger - levels array
 * @see https://github.com/piecioshka/underscore.nested
 * @requires http://underscorejs.org/
 * @license The MIT License
 */

// Example of _.nested
// -------------------

//     _.nested([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]

/*jslint nomen: true, indent: 4 */
/*global define */

(function (root, factory) {
    'use strict';

    if (typeof define !== 'undefined' && define.amd) {
        define(['underscore'], factory);
    } else {
        factory(root._);
    }
}(this, function (_) {
    'use strict';

    /**
     * Create array with passed deeps level.
     *
     * @param {Array} list
     * @param {number} [size]
     * @returns {Array}
     */
    function nested(list, size) {
        list = list || [];
        size = size || 2;

        var nestedList = [];
        var nestedItem = [];

        // Iterate for each item on list.
        _.each(list, function (item) {
            // Push them to new list.
            nestedItem.push(item);

            // If list is fulled.
            if (_.size(nestedItem) === size) {
                // Push new list to new `Array`.
                nestedList.push(nestedItem);
                // Create new empty list.
                nestedItem = [];
            }
        });

        // Check we have more than 0 items, put them to `Array`.
        if (_.size(nestedItem) !== 0) {
            nestedList.push(nestedItem);
        }

        return nestedList;
    }

    _.mixin({
        nested: nested
    });
}));
