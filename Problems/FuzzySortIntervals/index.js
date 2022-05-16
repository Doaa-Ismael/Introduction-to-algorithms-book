/*
    Given a list whose elements are 2-tuples that represent inclusive intervals,
    return the intersection of a pivot interval and the 2-tuples if one exists.
*/

export const findIntersection = (intervals, l, r) => {
    const pivot = intervals[r];
    let pivotL = pivot[0];
    let pivotR = pivot[1];
    for(let i = 0; i < r; i++){
        if(intervals[i][0] <= pivotR && intervals[i][1] >= pivotL) {
            if(intervals[i][0] > pivotL)
                pivotL = intervals[i][0];
            if(intervals[i][1] < pivotR)
                pivotR = intervals[i][1];
        }
    }
    return [pivotL, pivotR];

}

export const partitionRight = (intervals, intersectionIntervalLeft, l, r) => {
    let i = l - 1;
    for(let j = l; j < r; j++) {
        if(intervals[j][0] <= intersectionIntervalLeft) {
            i++;
            [intervals[j], intervals[i]] = [intervals[i], intervals[j]];
        }
    }
    [intervals[i+1], intervals[r]] = [intervals[r], intervals[i+1]];

    return i + 1;
}


const partitionLeft = (intervals, intersectionIntervalRight, l, r) => {
    let i = l - 1;
    for(let j = l; j < r; j++) {
        if(intervals[j][1] < intersectionIntervalRight) {
            i++;
            [intervals[j], intervals[i]] = [intervals[i], intervals[j]];
        }
    }
    [intervals[i+1], intervals[r]] = [intervals[r], intervals[i+1]];

    return i + 1;
}

export const fuzzyQuickSort = (intervals, l, r) => {
    if (l < r) {
        const [intersectionIntervalLeft, intersectionIntervalRight] = findIntersection(intervals, l, r);
        const t = partitionRight(intervals, intersectionIntervalLeft, l, r);
        const q = partitionLeft(intervals, intersectionIntervalRight, l, t);
        fuzzyQuickSort(intervals, l, q - 1);
        fuzzyQuickSort(intervals, t + 1, r);
        return  intervals;
    }
}
