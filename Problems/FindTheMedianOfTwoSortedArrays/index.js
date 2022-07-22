
export const getMedianIndex = (n) => Math.floor((n + 1) / 2) - 1;

const findTheMedianOfTwoSortedArrays = (array1, array2) => {
    const n1 = array1.length;
    const n2 = array2.length;

    const median1Index = getMedianIndex(n1);
    const median2Index =  getMedianIndex(n2)

    const median1 = array1[median1Index];
    const median2 = array2[median2Index];


    if(median1 === median2) return  median1;
    if(n1 === 2 ||  n2 === 2)  {
        const medianIndex = Math.floor(getMedianIndex(n1 + n2));
        return [...array1, ...array2].sort((a, b) => a- b)[medianIndex];
    }

    if(median1 < median2)
        return findTheMedianOfTwoSortedArrays(array1.slice(median1Index), array2.slice(0, median2Index + 1));

    return findTheMedianOfTwoSortedArrays(array1.slice(0, median1Index + 1 ), array2.slice(median2Index));

}

export default findTheMedianOfTwoSortedArrays;

