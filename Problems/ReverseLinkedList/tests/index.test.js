import LinkedList, { Node } from "../index";

describe('Linked List', () => {

    it('should add successfully', () => {
        const ll = new LinkedList();
        ll.add(new Node(1));
        ll.add(new Node(2));
        ll.add(new Node(3));
        ll.add(new Node(4));
        expect(ll.get()).toEqual([4, 3, 2, 1]);
    })

    it('should reverse successfully', () => {
        const ll = new LinkedList();
        ll.add(new Node(1));
        ll.add(new Node(2));
        ll.add(new Node(3));
        ll.add(new Node(4));
        ll.revers();
        expect(ll.get()).toEqual([1, 2, 3, 4]);
    })

})
