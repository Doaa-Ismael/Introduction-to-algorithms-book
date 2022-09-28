
class QueueWithTwoStacks {
    stack1 = [];
    stack2 = [];

    enqueue(num){
        this.stack1.push(num);
    }

    dequeue() {
        if(!this.stack2.length){
            while (this.stack1.length){
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop()
    }
}

export default QueueWithTwoStacks;
