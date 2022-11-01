export class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


export class BST {
    constructor() {
        this.root = null;
    }

    insert(node) {
        const value = node.value;
        if (!this.root) {
            this.root = node;
            return;
        }
        let current = this.root;
        let parent = null;
        while (current) {
            parent = current;
            if(value < current.value)
                current = current.left;
            else
                current = current.right;
        }
        if(value < parent.value)
            parent.left = node;
        else
            parent.right = node;

    }

    contains(value) {
        let current = this.root;
        while (current) {
            if (current.value === value) return current;
            if(current.value > value)
                current = current.left;
            else
                current = current.right
        }
        return false;
    }

    min(node) {
        let current = node;
        while (current) {
            if(current.left) current = current.left;
            else {
                return current;
            }
        }
        return null;
    }

    max() {
        let current = this.root;
        while (current) {
            if(current.right) current = current.right;
            else {
                return current.value
            }
        }
        return null;
    }

    successor(node) {
        /*
        We need to find the smallest element in the right child tree or the closes parent that has the node as it is left child
         */
        if(node.right) return this.min(node.right);
        else {
            let successor = this.root;
            let current = this.root;
            while (current !== null ) {
                if(current.value > node.value) {
                    successor = current;
                    current = current.left;
                }
                else if(current.value < node.value)
                    current = current.right;
                else break;
            }
            return successor;
        }
    }

    preOrder() {
        if (!this.root) return;
       const array = [];
       const myStack = [];
       let current = this.root;
       while (current || myStack.length) {
           if (current) {
               array.push(current.value);
               myStack.push(current.right);
               current = current.left;
           }
           else {
               current = myStack.pop();
           }
       }
       return array;

    }

    inOrderWithNoExtraSpace() {
        // without stack using Morris traversal, and is based on threaded binary search trees.
        // Simply we make links to the predecessors and then remove them again
        // O(n) because we visit every edge at most 3 times

        let current = this.root;
        const result = []
        while (current) {
            if (!current.left) {
                result.push(current.value)
                current = current.right;
            }
            else {
                let predecessor = current.left;
                while (predecessor.right && predecessor.right != current) {
                    predecessor = predecessor.right;
                }

                if(!predecessor.right) {
                    predecessor.right = current;
                    current = current.left;
                }

                else {
                    result.push(current.value);
                    predecessor.right = null
                    current = current.right
                }
            }
        }
        return result;
    }

    transplant(node1, node2) {
        const node1Parent = this.parent(node1);
        if(!node1Parent) {
            this.root = node2;
        }
        else if (node1Parent.left === node1) {
            node1Parent.left = node2
        }
        else {
            node1Parent.right = node2;
        }
    }

    remove(node) {
        /*
            We have 3 cases here:
            1) the node has no left child // replace it with its right child ( this also handles when node has no child )
            2) the node has only left child
            3) the node has both
         */

        if (!node.left) {
            this.transplant(node, node.right)
        }
        else if (node.left && !node.right) {
            this.transplant(node, node.left)
        }
        else {
            // splice the successor
            const successor = this.successor(node); // the successor will always be the most left and thus has no left child
            const successorParent = this.parent(successor);

            if( successorParent !== node ) {
                this.transplant(successor, successor.right)
                successor.right = node.right;

            }
            this.transplant(node, successor);
            successor.left = node.left;
        }
    }

    parent(node) {
        if(node === this.root) return null;
        let parent = this.root;
        while(parent.left !== node && parent.right !== node) {
            if(parent.value > node.value)
                parent = parent.left;
            else
                parent = parent.right
        }
        return parent;
    }

}
