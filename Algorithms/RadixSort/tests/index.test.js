import radixSort from "../index";

describe('Radix Sort', () => {
    it('should sort correctly - 1 ', () => {
        expect(radixSort([329, 457, 657, 839, 436, 720, 355])).toEqual([329, 355, 436, 457, 657, 720, 839]);
    })
})
