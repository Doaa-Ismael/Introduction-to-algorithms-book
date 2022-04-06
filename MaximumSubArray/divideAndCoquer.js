
export const findCrossingSubArray = (array, left, right, mid) => {
    let maxLeftSum = -9999999, maxRightSum = -9999999, maxLeft = left, maxRight = right, sum = 0;
    for (let i = mid; i >= 0; i--) {
        sum += array[i];
        if (sum > maxLeftSum) {
            maxLeftSum = sum;
            maxLeft = i;
        }
    }
    sum = 0;
    for (let i = mid + 1; i <= right;  i++) {
        sum += array[i];
        if (sum > maxRightSum) {
            maxRightSum = sum;
            maxRight = i;
        }
    }
    return { maxLeft, maxRight, sum: maxLeftSum + maxRightSum }
}


export const findMaximumSubArrayDivideAndConquer = (array, left, right) => {
    if (left === right) return {maxLeft: left, maxRight: right, sum: array[left]}
    const mid = parseInt(((right + left) / 2));
    const {
        maxLeft: maxLeftInLeftArray,
        maxRight: maxRightInLeftArray,
        sum: sumInLeftArray
    } = findMaximumSubArrayDivideAndConquer(array, left, mid);
    const {
        maxLeft: maxLeftInRightArray,
        maxRight: maxRightInRightArray,
        sum: sumInRightArray
    } = findMaximumSubArrayDivideAndConquer(array, mid + 1, right);
    const {
        maxLeft: maxLeftInCrossingArray,
        maxRight: maxRightInCrossingArray,
        sum: sumInCrossingArray
    } = findCrossingSubArray(array, left, right, mid);
    if (sumInLeftArray > sumInRightArray && sumInLeftArray > sumInCrossingArray) return {
        maxLeft: maxLeftInLeftArray,
        maxRight: maxRightInLeftArray,
        sum: sumInLeftArray
    };
    if (sumInRightArray > sumInLeftArray && sumInRightArray > sumInCrossingArray) return {
        maxLeft: maxLeftInRightArray,
        maxRight: maxRightInRightArray,
        sum: sumInRightArray
    };
    return {maxLeft: maxLeftInCrossingArray, maxRight: maxRightInCrossingArray, sum: sumInCrossingArray};
}