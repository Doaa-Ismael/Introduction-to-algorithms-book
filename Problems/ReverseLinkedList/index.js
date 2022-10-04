export class Node {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
    }

    add(node) {
        if (this.head != null)
            node.next = this.head;
        this.head = node;
    }

    get(){
        const result = [];
        let temp = this.head;
        while (temp !== null){
            result.push(temp.value);
            temp = temp.next;
        }
        return result;
    }

    revers() {
        if(this.head === null) return;
        let current = this.head;
        let next = null, prev = null;
        while(current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }

}


export default LinkedList;
