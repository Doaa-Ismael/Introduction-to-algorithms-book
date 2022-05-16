import {findIntersection, fuzzyQuickSort} from "../index";

describe('Fuzzy sort intervals', () => {

    describe('Find Intersection', () => {

        it('should return indices correctly - 1', () => {
            expect(findIntersection([[12, 14], [6, 8], [7, 10], [1, 4]], 0, 3)).toEqual([1, 4]);
        });

        it('should return indices correctly - 2', () => {
            expect(findIntersection([[8, 14], [1, 5], [4, 9], [8, 12]], 0, 3)).toEqual([8, 9]);
        });

        it('should return indices correctly - 3', () => {
            const input = [[13, 20], [19, 21], [9, 11], [5, 7], [12, 16], [8, 10], [7, 9], [4, 6], [20, 24], [2, 2], [6, 8], [11, 15]];

            expect(findIntersection(input, 0, 11)).toEqual([13, 15]);
        });

    });

    describe('Quick Sort Intervals', () => {

        it('should fuzzy sort intervals - 1', () => {
            const input = [[12, 14], [6, 8], [7, 10], [1, 4]];
            const expectedOutput = [[1, 4], [7, 10], [6, 8], [12, 14]];

            expect(fuzzyQuickSort(input, 0, input.length - 1)).toEqual(expectedOutput);
        });

        it('should fuzzy sort intervals - 2', () => {
            const input = [[8, 14], [1, 5], [4, 9], [8, 12]];
            const expectedOutput = [[1,5], [8, 12], [4, 9], [8, 14]];

            expect(fuzzyQuickSort(input, 0, input.length - 1)).toEqual(expectedOutput);
        });

        it('should fuzzy sort intervals - 3', () => {
            const input = [[13, 20], [19, 21], [9, 11], [5, 7], [12, 16], [8, 10], [7, 9], [4, 6], [20, 24], [2, 2], [6, 8], [11, 15]];
            const expectedOutput = [[2, 2], [4, 6], [6, 8], [7, 9], [5, 7], [8, 10], [9, 11], [11, 15], [13, 20], [12, 16], [19, 21], [20, 24]]

            expect(fuzzyQuickSort(input, 0, input.length - 1)).toEqual(expectedOutput);
        });
    });

});
