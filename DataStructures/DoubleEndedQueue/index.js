const N = 10;

class DoubleEndedQueue  {
    tail = 0; head = 0;
    queue = new Array(N).fill(0);

    isQueueFull() {
        if((this.head === 0 && this.tail === N-1) || (this.tail + 1 === this.head))
            return true;
        return false
    }

    isQueueEmpty() {
        if(this.head === this.tail )
            return true;
        return false
    }

    headEnqueue(num) {
        if(this.isQueueFull()) throw new Error('Overflow');
        if(this.head === 0)
            this.head = N-1;
        else
            this.head--;
        this.queue[this.head] = num;
    }

    headDequeue() {
        if(this.isQueueEmpty()) throw new Error('Underflow');
        const value = this.queue[this.head];
        if(this.head === N-1)
            this.head = 0;
        else
            this.head++;
        return value;
    }

    tailEnqueue(num) {
        if(this.isQueueFull()) throw new Error('Overflow');
        this.queue[this.tail] = num;
        if(this.tail === N-1)
            this.tail = 0;
        else
            this.tail++;
    }

    tailDequeue() {
        if(this.isQueueEmpty()) throw new Error('Underflow');
        if(this.tail === 0)
            this.tail = N -1;
        else this.tail--;
        const value = this.queue[this.tail];
        return value;
    }

}


export default DoubleEndedQueue;
