describe("nested", function () {
    it('should exists in underscore', function () {
        expect(_.nested).not.toBeUndefined();
    });

    it('should be a function', function () {
        expect(_.isFunction(_.nested)).toBeTruthy();
    });

    it('should works', function () {
        expect(_.nested([1, 2])).toEqual([[1, 2]]);
        expect(_.nested([1, 2], 1)).toEqual([[1], [2]]);
        expect(_.nested([1, 2], 3)).toEqual([[1, 2]]);
        expect(_.nested([1, 2, 3, 4, 5], 3)).toEqual([[1, 2, 3], [4, 5]]);
    });
});
