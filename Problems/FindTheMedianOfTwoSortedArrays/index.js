
const findTheMedianOfTwoSortedArrays= (smallerArray, biggerArray, l = 0, r = smallerArray.length - 1) => {

    if(smallerArray.length > biggerArray.length) return findTheMedianOfTwoSortedArrays(smallerArray, biggerArray);

    const n1 = smallerArray.length;
    const n2 = biggerArray.length;

    const half = Math.floor( (n1 + n2 + 1 ) / 2);

    // there is no - 1 here because the left and right are already zero-indexed.
    const splitSmallerArrayIndex = Math.floor((l + r) / 2) ;
    // - 1 for splitBiggerArrayIndex because it is zero index and - 1 for splitSmallerArrayIndex.
    const splitBiggerArrayIndex = half - splitSmallerArrayIndex - 2 ;
    const leftOfTheSmallerArray = smallerArray[splitSmallerArrayIndex] != null ? smallerArray[splitSmallerArrayIndex] : Number.NEGATIVE_INFINITY;
    const rightOfTheSmallerArray = smallerArray[splitSmallerArrayIndex + 1]  != null ? smallerArray[splitSmallerArrayIndex + 1] : Number.POSITIVE_INFINITY;
    const leftOfTheBiggerArray = biggerArray[splitBiggerArrayIndex] != null ?  biggerArray[splitBiggerArrayIndex] : Number.NEGATIVE_INFINITY;
    const rightOfTheBiggerArray =  biggerArray[splitBiggerArrayIndex + 1] != null ? biggerArray[splitBiggerArrayIndex + 1] : Number.POSITIVE_INFINITY;

    if(leftOfTheSmallerArray <= rightOfTheBiggerArray && leftOfTheBiggerArray <= rightOfTheSmallerArray)
        return Math.max(leftOfTheSmallerArray, leftOfTheBiggerArray);

    if(leftOfTheSmallerArray > rightOfTheBiggerArray)
        return findTheMedianOfTwoSortedArrays(smallerArray, biggerArray, l, splitSmallerArrayIndex - 1);

    return findTheMedianOfTwoSortedArrays(smallerArray, biggerArray, splitSmallerArrayIndex + 1, r);

}

export default findTheMedianOfTwoSortedArrays;


