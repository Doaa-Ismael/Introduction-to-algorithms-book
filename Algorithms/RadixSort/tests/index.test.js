import radixSort from "..";

describe('Radix Sort', () => {

    it('should sort correctly - 1 ', () => {
        expect(radixSort([329, 457, 657, 839, 436, 720, 355])).toEqual([329, 355, 436, 457, 657, 720, 839]);
    })

    it('should sort correctly - 2 ', () => {
        expect(radixSort([329, 47, 657, 39, 436, 70, 35])).toEqual([35, 39, 47, 70, 329, 436, 657]);
    })
})
