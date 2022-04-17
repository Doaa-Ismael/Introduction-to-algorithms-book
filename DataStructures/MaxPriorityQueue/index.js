import {buildMaxHeap, maxHeapify, parent} from "../../Algorithms/HeapSort";

class MaxPriorityQueue {

    constructor(array) {
        buildMaxHeap(array);
        this.maxHeap = array;
    }

    getMaxHeap () {
        return this.maxHeap;
    }

    extractMax () {
        const max = this.maxHeap[0];
        this.maxHeap[0] = this.maxHeap[this.maxHeap.length - 1];
        this.maxHeap.splice(-1);
        maxHeapify(this.maxHeap, 0);
        return max;
    }

    insert(value) {
        this.maxHeap.push(-999999);
        this.increaseKey(this.maxHeap.length - 1, value);
    }

    increaseKey(i, newValue) {
        this.maxHeap[i] = newValue;
        while(i > 0 && this.maxHeap[i] > this.maxHeap[parent(i)]) {
            const temp = this.maxHeap[i];
            this.maxHeap[i] = this.maxHeap[parent(i)];
            this.maxHeap[parent(i)] = temp;
            i = parent(i);
        }
    }

}

export default MaxPriorityQueue;