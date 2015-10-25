/**
 * @author Piotr Kowalski <piecioshka@gmail.com>
 * @fileOverview Underscore.js slice array to deep-levels array
 * @see https://github.com/piecioshka/underscore.slice
 * @license The MIT License
 */

// Example of _.slice
// -------------------

//     _.slice([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]

(function (_) {
    'use strict';

    /**
     * Create array with passed deeps level.
     *
     * @param {Array} list
     * @param {number} [size]
     * @returns {Array}
     */
    function slice(list, size) {
        list = list || [];
        size = size || 2;

        var nestedList = [];
        var nestedItem = [];

        // Iterate for each item on list.
        this.each(list, function (item) {
            // Push them to new list.
            nestedItem.push(item);

            // If list is fulled.
            if (this.size(nestedItem) === size) {
                // Push new list to new `Array`.
                nestedList.push(nestedItem);
                // Create new empty list.
                nestedItem = [];
            }
        }, this);

        // Check we have more than 0 items, put them to `Array`.
        if (this.size(nestedItem) !== 0) {
            nestedList.push(nestedItem);
        }

        return nestedList;
    }

    // Exports

    if (typeof define !== 'undefined' && define.amd) {
        // Support AMD.
        define(['underscore'], slice);
    } else if (typeof module !== 'undefined' && module.exports) {
        // Support CommonJS.
        module.exports = slice;
    } else {
        // Support browsers.
        window._.slice = slice;
    }
}());
