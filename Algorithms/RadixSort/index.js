const getMaxDigits = (A) => {
    let maxDigit = 0;
    for (let i = 0; i < A.length; i++) {
        const digitsOfTheNumber = A[i].toString().length;
        if (digitsOfTheNumber > maxDigit)
            maxDigit = A[0].toString().length;
    }
    return maxDigit;
}

const countingSortNumbersWithBaseTen = (A, d) => {
    const count = new Array(10).fill(0);
    const result = new Array(A.length);
    for(let i = 0; i < A.length; i++) {
        count[A[i].toString()[d]]++;
    }
    for(let i = 1; i < 10; i++) {
        count[i] += count[i-1];
    }
    for(let i = A.length - 1; i >= 0; i--) {
        const currentDigitValue = A[i].toString()[d];
        result[count[currentDigitValue]- 1] = A[i];
        count[currentDigitValue]--;
    }
    result.forEach((num, index) => A[index] = num);
}

const radixSort = (A) => {
    const d = getMaxDigits(A);
    for(let i = d - 1; i >= 0; i--)
        countingSortNumbersWithBaseTen(A, i);
    return A;
}


export default radixSort;
