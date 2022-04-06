import {findCrossingSubArray, findMaximumSubArrayDivideAndConquer} from "../divideAndCoquer";
import {findMaximumSubArrayBruteForce} from "../bruteForce";

describe("Maximum subArray" , () =>{

    describe('Brute force', () => {
        it('should return correct results - 1',  () => {
            expect(findMaximumSubArrayBruteForce([1, -3, 4, 2, -4, 5], 0, 5)).toEqual({maxLeft: 2, maxRight: 5, sum: 7});
        })
        it('should return correct results - 2',  () => {
            expect(findMaximumSubArrayBruteForce([1, -3, 4, 2, -4, -5], 0, 5)).toEqual({maxLeft: 2, maxRight: 3, sum: 6});
        })
        it('should return correct results when all numbers are negative',  () => {
            expect(findMaximumSubArrayBruteForce([-1, -3, -4, -2, -4, -5], 0, 5)).toEqual({maxLeft: 0, maxRight: 0, sum: -1});
        })
    })

    describe('Divide and conquer', () => {
        it('should return correct results - 1',  () => {
            expect(findMaximumSubArrayDivideAndConquer([1, -3, 4, 2, -4, 5], 0, 5)).toEqual({maxLeft: 2, maxRight: 5, sum: 7});
        })
        it('should return correct results - 2',  () => {
            expect(findMaximumSubArrayDivideAndConquer([1, -3, 4, 2, -4, -5], 0, 5)).toEqual({maxLeft: 2, maxRight: 3, sum: 6});
        })
        it('should return correct results when all numbers are negative - 1',  () => {
            expect(findMaximumSubArrayDivideAndConquer([-1, -3, -4, -2, -4, -5], 0, 5)).toEqual({maxLeft: 0, maxRight: 0, sum: -1});
        })
        it('should return correct results when all numbers are negative - 2',  () => {
            expect(findMaximumSubArrayDivideAndConquer([-11, -3, -4, -1, -4, -5], 0, 5)).toEqual({maxLeft: 3, maxRight: 3, sum: -1});
        })
    })


   describe('findCrossingSubArray', () => {
       it('should return correct results - 1',  () => {
           expect(findCrossingSubArray([1, -3, 4, 2, -4, 5], 0, 5, 2)).toEqual({maxLeft: 2, maxRight: 5, sum: 7});
       })
       it('should return correct results - 2',  () => {
           expect(findCrossingSubArray([1, -3, 4, 2, -4, -5], 0, 5, 2)).toEqual({maxLeft: 2, maxRight: 3, sum: 6});
       })
       it('should return correct results when all numbers are negative',  () => {
           expect(findCrossingSubArray([-1, -3, -4, -2, -4, -5], 0, 5, 2)).toEqual({maxLeft: 2, maxRight: 3, sum: -6});
       })
   })
})