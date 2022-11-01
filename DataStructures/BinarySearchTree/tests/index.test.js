import {Node, BST} from "..";

describe('Binary Search Tree', () => {
    const node_5 = new Node(-5)
    const node_4 = new Node(-4)
    const node_3 = new Node(-3)
    const node_2 = new Node(-2)
    const node_1 = new Node(-1)
    const node0 = new Node(0)
    const node1 = new Node(1)
    const node2 = new Node(2)
    const node3 = new Node(3)
    const node4 = new Node(4)
    const node5 = new Node(5)


    let bstTree;
    beforeEach(() => {
        bstTree = new BST();
        bstTree.insert(new Node(5))
        bstTree.insert(new Node(2))
        bstTree.insert(new Node(3))
        bstTree.insert(new Node(1))
        bstTree.insert(new Node(4))
        bstTree.insert(new Node(0))
        bstTree.insert(new Node(2.5))
        bstTree.insert(new Node(8))
        bstTree.insert(new Node(9))
        bstTree.insert(new Node(6))
        bstTree.insert(new Node(4.5))
    })


    it('should initialize node correctly', () => {
        const node =  new Node(4);
        expect(node.value).toEqual(4)
        expect(node.left).toEqual(null)
        expect(node.right).toEqual(null)
    })

    it('should insert node correctly', () => {
        const bst =  new BST();
        expect(bst.root).toEqual(null);

        bst.insert(node0);
        expect(bst.root.value).toEqual(node0.value);

        bst.insert(node3);
        expect(bst.root.right.value).toEqual(node3.value);

        bst.insert(node5);
        expect(bst.root.right.right.value).toEqual(node5.value);

        bst.insert(node4);
        expect(bst.root.right.right.left.value).toEqual(node4.value);

        bst.insert(node2);
        expect(bst.root.right.left.value).toEqual(node2.value);

        bst.insert(node1);
        expect(bst.root.right.left.left.value).toEqual(node1.value);

        bst.insert(node_4);
        expect(bst.root.left.value).toEqual(node_4.value);


        bst.insert(node_5);
        expect(bst.root.left.left.value).toEqual(node_5.value);

        bst.insert(node_2);
        expect(bst.root.left.right.value).toEqual(node_2.value);

        bst.insert(node_3);
        expect(bst.root.left.right.left.value).toEqual(node_3.value);

        bst.insert(node_1);
        expect(bst.root.left.right.right.value).toEqual(node_1.value);

    })

    it('should search node correctly', () => {

        expect(bstTree.contains(5)).toBeTruthy()
        expect(bstTree.contains(4)).toBeTruthy()
        expect(bstTree.contains(3)).toBeTruthy()
        expect(bstTree.contains(2)).toBeTruthy()
        expect(bstTree.contains(1)).toBeTruthy()
        expect(bstTree.contains(0)).toBeTruthy()
        expect(bstTree.contains(9)).toBeTruthy()

        expect(bstTree.contains(80)).toBeFalsy()
        expect(bstTree.contains(-5)).toBeFalsy()
        expect(bstTree.contains(-10)).toBeFalsy()
        expect(bstTree.contains(230)).toBeFalsy()
        expect(bstTree.contains(340)).toBeFalsy()

    })

    it('should return minimum correctly', () => {

        expect(bstTree.min(bstTree.root).value).toEqual(0);

    })

    it('should return max correctly', () => {

        expect(bstTree.max()).toEqual(9);

    })

    it('should return successor correctly', () => {
        const node3 = bstTree.contains(3);
        const node2AndHaf = bstTree.contains(2.5);
        const node5 = bstTree.contains(5);
        const node4AndHalf = bstTree.contains(4.5);

        expect(bstTree.successor(node3).value).toEqual(4);
        expect(bstTree.successor(node2AndHaf).value).toEqual(3);
        expect(bstTree.successor(node5).value).toEqual(6);
        expect(bstTree.successor(node4AndHalf).value).toEqual(5);

    })

    it('should remove correctly', () => {

        // remove node with no children
        const node0 = bstTree.contains(0);
        expect(bstTree.preOrder()).toEqual([5, 2, 1, 0, 3, 2.5, 4, 4.5, 8, 6, 9]);
        bstTree.remove(node0)
        expect(bstTree.contains(0)).toBeFalsy();
        expect(bstTree.preOrder()).toEqual([5, 2, 1, 3, 2.5, 4, 4.5, 8, 6, 9]);


        // remove node with two children
        const node8 = bstTree.contains(8);
        bstTree.remove(node8)
        expect(bstTree.contains(8)).toBeFalsy();
        expect(bstTree.preOrder()).toEqual([5, 2, 1, 3, 2.5, 4, 4.5, 9, 6]);


        // remove node with two children
        const node2 = bstTree.contains(2);
        bstTree.remove(node2)
        expect(bstTree.contains(2)).toBeFalsy();
        expect(bstTree.preOrder()).toEqual([5, 2.5, 1, 3, 4, 4.5, 9, 6]);


        // remove root
        const node5 = bstTree.contains(5);
        bstTree.remove(node5)
        expect(bstTree.contains(5)).toBeFalsy();
        expect(bstTree.preOrder()).toEqual([6, 2.5, 1, 3, 4, 4.5, 9]);


        // remove node with one child
        const node3 = bstTree.contains(3);
        bstTree.remove(node3)
        expect(bstTree.contains(3)).toBeFalsy();
        expect(bstTree.preOrder()).toEqual([6, 2.5, 1, 4, 4.5, 9]);

        const node6 = bstTree.contains(6);
        bstTree.remove(node6)
        expect(bstTree.contains(6)).toBeFalsy();
        expect(bstTree.preOrder()).toEqual([9, 2.5, 1, 4, 4.5]);

    })

    it('should traverse in order correctly',  () => {
       expect(bstTree.inOrderWithNoExtraSpace()).toEqual([0, 1, 2, 2.5, 3, 4, 4.5, 5, 6, 8, 9]);
    });


})
