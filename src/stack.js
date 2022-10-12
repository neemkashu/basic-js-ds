const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */

 class Stack extends Array {

    peek() {
        return this[this.length - 1];
    }
    push(element) {
        this[this.length] = element;
    }
    pop() {
        let poped = this.peek();
        delete this[this.length - 1];
        this.length = this.length - 1; 
        return poped;
    }
}

module.exports = {
  Stack
};
