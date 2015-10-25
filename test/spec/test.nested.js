var _ = require('underscore');
_.slice = require('../../underscore.slice');

describe('slice', function () {
    it('should exists in underscore', function () {
        expect(_.slice).not.toBeUndefined();
    });

    it('should be a function', function () {
        expect(_.isFunction(_.slice)).toBeTruthy();
    });

    it('should works', function () {
        expect(_.slice([1, 2])).toEqual([[1, 2]]);
        expect(_.slice([1, 2], 1)).toEqual([[1], [2]]);
        expect(_.slice([1, 2], 3)).toEqual([[1, 2]]);
        expect(_.slice([1, 2, 3, 4, 5], 3)).toEqual([[1, 2, 3], [4, 5]]);
    });
});
