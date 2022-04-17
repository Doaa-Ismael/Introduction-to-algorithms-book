import MaxPriorityQueue from "../index";

describe('Maximum Priority Queue', () => {

    it('should initialize the heap correctly', () => {
        const priorityQueue = new MaxPriorityQueue([4, 1, 3, 2, 16, 9, 10, 14, 8, 7]);
        expect(priorityQueue.getMaxHeap()).toEqual([16, 14, 10, 8, 7, 9, 3, 2, 4, 1]);
    });

    it('should insert correctly', () => {
        const priorityQueue = new MaxPriorityQueue([4, 1, 3, 2, 16, 9, 10, 14, 8, 7]);
        priorityQueue.insert(13);
        expect(priorityQueue.getMaxHeap()).toEqual([16, 14, 10, 8, 13, 9, 3, 2, 4, 1, 7]);
    });

    it('should extract maximum correctly', () => {
        const priorityQueue = new MaxPriorityQueue([4, 1, 3, 2, 16, 9, 10, 14, 8, 7]);
        expect(priorityQueue.extractMax()).toEqual(16);
        expect(priorityQueue.getMaxHeap()).toEqual([14, 8, 10, 4, 7, 9, 3, 2, 1]);
    });

    it('should increase key correctly', () => {
        const priorityQueue = new MaxPriorityQueue([4, 1, 3, 2, 16, 9, 10, 14, 8, 7]);
        priorityQueue.increaseKey(7, 90);
        expect(priorityQueue.getMaxHeap()).toEqual([90, 16, 10, 14, 7, 9, 3, 8, 4, 1]);
    });
})