// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor(){
        this.input = new Stack();
        this.output = new Stack();
    }
    add(record){
        this.input.push(record);
    }
    remove(){
        while(this.input.peek()){
            this.output.push(this.input.pop());
        }
        const result = this.output.pop();
        while(this.output.peek()){
            this.input.push(this.output.pop());
        }
        return result;
    }
    peek(){
        while(this.input.peek()){
            this.output.push(this.input.pop());
        }
        const result = this.output.peek();
        while(this.output.peek()){
            this.input.push(this.output.pop());
        }
        return result;
    }
}

module.exports = Queue;
