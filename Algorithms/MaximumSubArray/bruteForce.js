export const findMaximumSubArrayBruteForce = (array, left, right) => {
    let maxLeft = left, maxRight = right, sum = 0, result = -99999;
    for(let i = 0; i<=right; i++){
        sum = 0;
        for(let j = i; j<=right; j++){
            sum += array[j];
            if (result < sum) {
                maxRight = j;
                maxLeft = i;
                result = sum;
            }
        }
    }

    return { maxLeft, maxRight, sum: result }
}