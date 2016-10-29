'use strict';

var _ = require('underscore');
var slice = require('../../../src/index');

_.mixin({ slice: slice });

describe('General', function () {
    it('should extend underscore library', function () {
        expect(_.slice).not.toBeUndefined();
    });

    it('should be a function', function () {
        expect(_.isFunction(_.slice)).toBeTruthy();
    });

    it('should works fine', function () {
        expect(_.slice([1, 2])).toEqual([[1, 2]]);
        expect(_.slice([1, 2], 1)).toEqual([[1], [2]]);
        expect(_.slice([1, 2], 3)).toEqual([[1, 2]]);
        expect(_.slice([1, 2, 3, 4, 5], 3)).toEqual([[1, 2, 3], [4, 5]]);
    });
});
