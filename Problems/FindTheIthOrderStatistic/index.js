import {partition} from "../../Algorithms/QuickSort/withLomutoPartioning";

export const findTheIthOrderStatisticRecursively = (a, left, right, order) => {
    if(left === right) return a[left];

    const partitionIndex = partition(a, left, right);
    const numberOfElementInLeftPartition = partitionIndex - left + 1;

    if(numberOfElementInLeftPartition=== order) return a[partitionIndex];

    if(order < numberOfElementInLeftPartition)
        return findTheIthOrderStatisticRecursively(a, left, partitionIndex - 1, order);
    return findTheIthOrderStatisticRecursively(a,partitionIndex +  1, right, order - numberOfElementInLeftPartition)

}


export const findTheIthOrderStatisticIteratively= (a, left, right, order) => {
    let l = left, r = right, o = order;
    while (l <= r) {
        if(l === r) return a[l];
        const partitionIndex = partition(a, l, r);
        const numberOfElementInLeftPartition = partitionIndex - l + 1;
        if(numberOfElementInLeftPartition === o)  return a[partitionIndex];

        if(o < numberOfElementInLeftPartition) {
            r = partitionIndex - 1;
        }
        else {
            l = partitionIndex + 1;
            o = o - numberOfElementInLeftPartition;
        }
    }

}
