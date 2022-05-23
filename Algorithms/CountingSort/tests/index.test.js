import countingSort from "../index";

describe('Counting Sort', () => {
    it('should sort correctly -1 ', () => {
        expect(countingSort([1, 9, 3, 5, 1, 3, 4, 5, 0], 9)).toEqual([0, 1, 1, 3, 3, 4, 5, 5, 9]);
    })
    it('should sort correctly -2 ', () => {
        expect(countingSort([9, 3, 4, 3, 20, 0, 0, 4], 20)).toEqual([0, 0, 3, 3, 4, 4, 9, 20]);
    })
})
