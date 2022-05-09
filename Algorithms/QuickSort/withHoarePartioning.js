
const partition = (array, l, r) => {
    const x = array[l];
    let i = l - 1;
    let j = r + 1;
    while(true) {
        do {
            i++;
        } while (array[i] < x)
        do {
            j--;
        } while (array[j] > x)
        if(i < j)
            [array[j], array[i]] = [array[i], array[j]];
        else
            return j;
    }
}

const quickSortWithHoarePartitioning = (array, l, r) => {
    if( l < r) {
        const q = partition(array, l, r);
        quickSortWithHoarePartitioning(array, l, q);
        quickSortWithHoarePartitioning(array, q + 1, r);
        return array;
    }

}


export default quickSortWithHoarePartitioning;
