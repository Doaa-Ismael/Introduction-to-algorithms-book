import findTheIthOrderStatisticRecursively from "../index";

describe('Find the order statistic in a set of numbers', () => {

    // The sorted input [1, 7, 9, 10, 11, 13, 23, 29, 34, 56]
    it('Find the 7th smallest element', () => {
        const input = [1, 29, 34, 7, 13, 9, 23, 56, 10, 11];
        expect(findTheIthOrderStatisticRecursively(input, 0, input.length - 1, 7)).toEqual(23);
    });

    it('Find the 2nd smallest element', () => {
        const input = [1, 29, 34, 7, 13, 9, 23, 56, 10, 11];
        expect(findTheIthOrderStatisticRecursively(input, 0, input.length - 1, 2)).toEqual(7);
    });

    it('Find the 9nd smallest element', () => {
        const input = [1, 29, 34, 7, 13, 9, 23, 56, 10, 11];
        expect(findTheIthOrderStatisticRecursively(input, 0, input.length - 1, 9)).toEqual(34);
    });

});
