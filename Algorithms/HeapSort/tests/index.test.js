import heapSort from "../index";

describe('Heap Sort', () => {
    it('should sort - 1', () => {
        expect(heapSort([4, 1, 3, 2, 16, 9, 10, 14, 8, 7])).toEqual([1, 2, 3, 4, 7, 8, 9, 10, 14, 16])
    })
    it('should sort - 2', () => {
        expect(heapSort([12, 46, 82, 13, 5])).toEqual([5, 12, 13, 46, 82])
    })
    it('should sort - 3', () => {
        expect(heapSort([8, 2, 90, 12])).toEqual([2, 8, 12, 90])
    })
    it('should sort - 4', () => {
        expect(heapSort([-19, 29, 0, 2, 2])).toEqual([-19, 0, 2, 2, 29])
    })
    it('should sort - 5', () => {
        expect(heapSort([8, 2, 1, 0, 9])).toEqual([0, 1, 2, 8, 9])
    })
})