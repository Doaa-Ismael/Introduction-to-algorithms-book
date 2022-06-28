import {partition} from "../../Algorithms/QuickSort/withLomutoPartioning";

const findTheIthOrderStatisticRecursively = (a, left, right, order) => {
    if(left === right) return a[left];

    const partitionIndex = partition(a, left, right);
    const numberOfElementInLeftPartition = partitionIndex - left + 1;

    if(numberOfElementInLeftPartition=== order) return a[partitionIndex];

    if(order < numberOfElementInLeftPartition)
        return findTheIthOrderStatisticRecursively(a, left, partitionIndex - 1, order);
    return findTheIthOrderStatisticRecursively(a,partitionIndex +  1, right, order - numberOfElementInLeftPartition)

}


export default findTheIthOrderStatisticRecursively;
