import { quickSortWithLomutoPartiotioning } from "../";
import quickSortWithHoarePartitioning from "../withHoarePartioning";

describe('Quick Sort', () => {

    describe('quick sort with Lomuto partitioning', () => {

        it('should sort - 1', () => {
            expect(quickSortWithLomutoPartiotioning([4, 1, 3, 2, 16, 9, 10, 14, 8, 7], 0, 9)).toEqual([1, 2, 3, 4, 7, 8, 9, 10, 14, 16])
        })
        it('should sort - 2', () => {
            expect(quickSortWithLomutoPartiotioning([12, 46, 82, 13, 5], 0, 4)).toEqual([5, 12, 13, 46, 82])
        })
        it('should sort - 3', () => {
            expect(quickSortWithLomutoPartiotioning([8, 2, 90, 12], 0, 3)).toEqual([2, 8, 12, 90])
        })
        it('should sort - 4', () => {
            expect(quickSortWithLomutoPartiotioning([-19, 29, 0, 2, 2], 0, 4)).toEqual([-19, 0, 2, 2, 29])
        })
        it('should sort - 5', () => {
            expect(quickSortWithLomutoPartiotioning([8, 2, 1, 0, 9], 0, 4)).toEqual([0, 1, 2, 8, 9])
        })
    })

    describe('quick sort with Hoare partitioning', () => {

        it('should sort - 1', () => {
            expect(quickSortWithHoarePartitioning([4, 1, 3, 2, 16, 9, 10, 14, 8, 7], 0, 9)).toEqual([1, 2, 3, 4, 7, 8, 9, 10, 14, 16])
        })
        it('should sort - 2', () => {
            expect(quickSortWithHoarePartitioning([12, 46, 82, 13, 5], 0, 4)).toEqual([5, 12, 13, 46, 82])
        })
        it('should sort - 3', () => {
            expect(quickSortWithHoarePartitioning([8, 2, 90, 12], 0, 3)).toEqual([2, 8, 12, 90])
        })
        it('should sort - 4', () => {
            expect(quickSortWithHoarePartitioning([-19, 29, 0, 2, 2], 0, 4)).toEqual([-19, 0, 2, 2, 29])
        })
        it('should sort - 5', () => {
            expect(quickSortWithHoarePartitioning([8, 2, 1, 0, 9], 0, 4)).toEqual([0, 1, 2, 8, 9])
        })
    })

})
