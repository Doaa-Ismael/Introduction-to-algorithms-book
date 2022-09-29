
class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
    }
}

class Stack {

    constructor() {
        this.head = null;
    }

    push(num) {
        const newNode = new Node(num);
        if(!this.head) {
            this.head = newNode;
        }
        else {
            newNode.prev = this.head;
            this.head = newNode;
        }
    }

    pop() {
        const value = this.head.value;
        this.head = this.head.prev;
        return value;
    }
}

export default Stack;
