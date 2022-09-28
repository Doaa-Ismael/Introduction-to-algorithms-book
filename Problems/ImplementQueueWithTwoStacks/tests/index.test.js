import QueueWithTwoStacks from "..";

describe('Queue implemented with two stacks', () => {

    it('should works correctly', () => {
        const myQueue = new QueueWithTwoStacks();
        myQueue.enqueue(1);
        myQueue.enqueue(4);
        myQueue.enqueue(10);
        expect(myQueue.dequeue()).toEqual(1);
        expect(myQueue.dequeue()).toEqual(4);
        myQueue.enqueue(7);
        myQueue.enqueue(9);
        expect(myQueue.dequeue()).toEqual(10);
        expect(myQueue.dequeue()).toEqual(7);
        expect(myQueue.dequeue()).toEqual(9);
    });

});
