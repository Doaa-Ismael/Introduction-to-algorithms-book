const countingSort = (A, maxNumberInA) => {
    const count = new Array(maxNumberInA + 1).fill(0);
    const result = new Array(A.length);
    for(let i = 0; i < A.length; i++) {
        count[A[i]]++;
    }
    for(let i = 1; i <= maxNumberInA; i++) {
        count[i] += count[i-1];
    }
    for(let i = A.length - 1; i >= 0 ; i--) {
        result[count[A[i]] - 1] = A[i];
        count[A[i]]--;
    }
    return result;
}


export default countingSort;
