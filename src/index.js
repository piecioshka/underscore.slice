/**
 * @author $AUTHOR$
 * @name $NAME$
 * @description $DESCRIPTION$
 * @version $VERSION$
 * @license $LICENSE$
 * @example
 *
 *   _.slice([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]
 */

'use strict';

function forEach(list, iterator, context) {
    for (var i = 0; i < list.length; i++) {
        iterator.call(context || this, list[i], i);
    }
}

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

    forEach(list, function (item) {
        nestedItem.push(item);
        var isListFulled = (nestedItem.length === size);

        if (isListFulled) {
            nestedList.push(nestedItem);
            nestedItem = [];
        }
    }, this);

    var isListNotEmpty = (nestedItem.length > 0);

    if (isListNotEmpty) {
        nestedList.push(nestedItem);
    }

    return nestedList;
}

module.exports = slice;
