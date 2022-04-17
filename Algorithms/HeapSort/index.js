export const parent = (i) => Math.floor(((i-1) / 2));

const left = (i) => 2 * i + 1;

const right = (i) => 2 * i + 2;

export const maxHeapify = (array, i) => {
    let largestValueIndex = i;
    const current = array[i];
    const l = left(i);
    const r = right(i);
    if(l < array.length && array[l] > array[i])
        largestValueIndex = l;
    if(r < array.length && array[r] > array[largestValueIndex])
        largestValueIndex = r;
    if(largestValueIndex !== i) {
        array[i] = array[largestValueIndex];
        array[largestValueIndex] = current;
        maxHeapify(array, largestValueIndex);
    }
}

export const buildMaxHeap = (array) => {
    const length = parseInt((array.length / 2).toString());
    for(let i = length; i>=0 ; i--) {
        maxHeapify(array, i);
    }
}

const heapSort = (array) => {
    const sortedArray = [];
    buildMaxHeap(array);
    while (array.length > 1) {
        sortedArray.unshift(array[0]);
        array[0] = array[array.length - 1];
        array.splice(-1);
        maxHeapify(array, 0);
    }
    sortedArray.unshift(array[0]);
    return sortedArray;
}


export default heapSort;