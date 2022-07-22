import findTheMedianOfTwoSortedArrays, {getMedianIndex} from "..";

describe('Find the median of two sorted arrays', () => {
    // return first median in case of even length array
    it('should work correctly - 1', () => {
        const array1 = [1,  5, 6,  23, 50, 98];
        const array2 = [7, 45, 50, 55, 60, 90];
        // 1, 5, 6, 7, 23, [45], 50, 50, 98, 90
        expect(findTheMedianOfTwoSortedArrays(array1, array2)).toEqual(45);
    })

    it('should work correctly - 2', () => {
        const array1 = [10, 45, 60, 90];
        const array2 = [8, 34, 67, 100];

        expect(findTheMedianOfTwoSortedArrays(array1, array2)).toEqual(45);
    })

    it('should work correctly - 3', () => {
        const array1 = [23, 40, 43, 49, 50, 88];
        const array2 = [10, 20, 30, 40, 50, 60];

        expect(findTheMedianOfTwoSortedArrays(array1, array2, 6)).toEqual(40);
    })

    it('should work correctly - 4', () => {
        const array1 = [70, 80, 100];
        const array2 = [30, 60, 90];

        expect(findTheMedianOfTwoSortedArrays(array1, array2)).toEqual(70);
    })

    it('should work correctly - 5', () => {
        const array1 = [1,  5];
        const array2 = [4, 9];

        expect(findTheMedianOfTwoSortedArrays(array1, array2)).toEqual(4);
    })

    it('should work correctly - 6', () => {
        const array1 = [70,  80];
        const array2 = [60, 90];

        expect(findTheMedianOfTwoSortedArrays(array1, array2)).toEqual(70);
    })
    it('should work correctly - 7', () => {
        const array1 = [ 10, 45 ];
        const array2 = [ 34, 67 ];

        expect(findTheMedianOfTwoSortedArrays(array1, array2)).toEqual(34);
    })

    it('should work correctly - 8', () => {
        const array1 = [23, 50, 98];
        const array2 = [7, 45, 50];

        expect(findTheMedianOfTwoSortedArrays(array1, array2)).toEqual(45);
    })

    it('should work correctly - 9', () => {
        const array1 = [];
        const array2 = [1];

        expect(findTheMedianOfTwoSortedArrays(array1, array2)).toEqual(45);
    })
});


describe('Get median index of any array', () => {

    it('should return index correctly regardless of it is odd or even', () => {
        expect(getMedianIndex(5)).toEqual(2);
        expect(getMedianIndex(10)).toEqual(4);
        expect(getMedianIndex(11)).toEqual(5);
        expect(getMedianIndex(6)).toEqual(2);
        expect(getMedianIndex(7)).toEqual(3);
        expect(getMedianIndex(15)).toEqual(7);
        expect(getMedianIndex(16)).toEqual(7);
    })

})
