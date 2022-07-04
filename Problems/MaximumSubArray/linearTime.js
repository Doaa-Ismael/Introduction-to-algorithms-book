export const findMaximumSubArrayInLinearTime = (array) => {
    let left = 0, right = 0, currentLeft = 0, currentSum = 0, resultSum = -999999;
    for(let i = 0; i<array.length; i++) {
        currentSum += array[i];
        if(currentSum > resultSum) {
            resultSum = currentSum;
            left =  currentLeft;
            right = i;
        }
        if (currentSum < 0) {
            currentLeft = i + 1;
            currentSum = 0;
        }
    }
    return { maxLeft: left, maxRight: right, sum: resultSum }
}