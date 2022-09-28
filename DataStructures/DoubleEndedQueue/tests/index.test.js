import DoubleEndedQueue from "../index";

describe('Double Ended Queue', () => {

    it('should works correctly', () => {
        const priorityQueue = new DoubleEndedQueue();
        priorityQueue.headEnqueue(1);
        priorityQueue.headEnqueue(4);
        priorityQueue.headEnqueue(5);
        priorityQueue.headEnqueue(2);
        expect(priorityQueue.headDequeue()).toEqual(2);
        expect(priorityQueue.tailDequeue()).toEqual(1);
        priorityQueue.tailEnqueue(9);
        priorityQueue.tailEnqueue(2);
        expect(priorityQueue.headDequeue()).toEqual(5);
        expect(priorityQueue.tailDequeue()).toEqual(2);
        expect(priorityQueue.tailDequeue()).toEqual(9);
        priorityQueue.tailEnqueue(10);
        expect(priorityQueue.tailDequeue()).toEqual(10);
    });
})
