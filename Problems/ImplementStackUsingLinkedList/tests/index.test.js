import Stack from "..";

describe('Stack implemented using linked list', () => {

    it('should works correctly', () => {
        const myStack = new Stack();
        myStack.push(1);
        myStack.push(2);
        myStack.push(3);
        expect(myStack.pop()).toEqual(3)
        expect(myStack.pop()).toEqual(2)
        myStack.push(5);
        myStack.push(7);
        expect(myStack.pop()).toEqual(7)
        expect(myStack.pop()).toEqual(5)
        expect(myStack.pop()).toEqual(1)
    });

});
