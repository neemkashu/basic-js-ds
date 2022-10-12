const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 class Queue extends ListNode {
    constructor(x) {
        super(x);
        this.tail = null;
    }    
    getUnderlyingList() {
        let cutted = this;
        delete cutted.tail;
        return cutted;
    }
    enqueue(value) {
        if (!this.next && (this.value === undefined)) {
            this.value = value;
            this.tail = this;
            return;
        }
        let current = this.tail;
        current.next = new ListNode(value);
        this.tail = current.next;
    }
    dequeue() {
        let headOld = this.value;
        let headNew = this.next;
        if (headNew === null) {
            this.value = undefined;
            this.next = null;
        } else {
            this.value = headNew.value;
            this.next = headNew.next;
        }
        delete this;
        return headOld;
    }
}
module.exports = {
    Queue
};
