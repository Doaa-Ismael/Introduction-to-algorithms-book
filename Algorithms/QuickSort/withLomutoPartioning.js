
export const partition = (array, l, r) => {
    const x = array[r];
    let i = l - 1;
    for(let j = l; j<r ; j++){
        if(array[j] <= x) {
            i++;
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    [array[i+1], array[r]] = [array[r], array[i+1]]
    return  i + 1;
}

const quickSortWithLomutoPartiotioning = (array, l, r) => {
    if( l < r) {
        const q = partition(array, l, r);
        quickSortWithLomutoPartiotioning(array, l, q - 1);
        quickSortWithLomutoPartiotioning(array, q + 1, r);
        return array;
    }

}


export default quickSortWithLomutoPartiotioning;
