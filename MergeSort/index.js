

const mergeSort = (array, leftIndex, rightIndex) => {
    if(leftIndex >= rightIndex) return;
    const mid = parseInt((leftIndex + rightIndex ) / 2);
    mergeSort(array, leftIndex, mid);
    mergeSort(array, mid + 1, rightIndex);


    const leftArray = array.slice(leftIndex, mid + 1);
    const rightArray = array.slice(mid +  1, rightIndex + 1);

    let i = 0;
    let j = 0;
    let k = leftIndex;

    while(i < leftArray.length && j < rightArray.length) {
        if(leftArray[i] <= rightArray[j]) {
            array[k] = leftArray[i];
            i++;
        }
        else {
            array[k] = rightArray[j];
            j++;
        }
        k++
    }
    while (j < rightArray.length) {
        array[k] = rightArray[j];
        j++;
        k++;
    }
    while (i < leftArray.length) {
        array[k] = leftArray[i];
        i++;
        k++;
    }
    console.log(array);
}

mergeSort([67, 35, 20, 15, 10, 3], 0, 5);