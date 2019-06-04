// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data,next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }
    insertFirst(data){
        if(this.head){
            const second = new Node(this.head.data,this.head.next);
            this.head = new Node(data,second);
        }else{
            this.head = new Node(data);
        }
    }
    size(){
        if(!this.head){
            return 0;
        }
        let current = this.head;
        let count = 1;
        while(current.next){
            count++;
            current = current.next;
        }
        return count;
    }
    getFirst(){
        return this.head;
    }
    getLast(){
        if(!this.head){
            return null;
        }
        let last = this.head;
        while(last.next){
            last = last.next;
        }
        return last;
    }
    clear(){
        this.head = null;
    }
    removeFirst(){
        if(!this.head){
            return;
        }
        this.head = this.head.next;

    }
    removeLast(){
        let previous = this.head;
        if(!previous){
            return;
        }
        let node = this.head.next;
        if(!node){
            this.head = null;
            return;
        }
        while(node.next){
            previous = previous.next;
            node = node.next;
        }
        previous.next = null;
    }
    insertLast(data) {
        const last = this.getLast();
    
        if (last) {
          // There are some existing nodes in our chain
          last.next = new Node(data);
        } else {
          // The chain is empty!
          this.head = new Node(data);
        }
      }
    getAt(index) {
        let counter = 0;
        let node = this.head;
        while (node) {
          if (counter === index) {
            return node;
          }
    
          counter++;
          node = node.next;
        }
        return null;
    }
    removeAt(n){
        if(!this.head){
            return;
        }
        if(n===0){
            this.removeFirst();
            return;
        }
        const length = this.size()-1;
        if(n===length){
            this.removeLast();
            return;
        }else if(n > length){
            return;
        }else{
            let previous = this.getAt(n-1);
            previous.next = this.getAt(n+1);
        }  
    }
    insertAt(data,index){
        if(!this.head){
            this.head = new Node(data);
            return;
        }
        const length = this.size();
        const node = new Node(data);
        if(index === 0){
            node.next = this.head;
            this.head = node;
        }else if(index > length){
            this.getLast().next = node;
        }else{
            node.next = this.getAt(index);
            this.getAt(index-1).next = node;
        }
    }
    forEach(fn){
        let node = this.head;
        let count = 0;
        while(node){
            fn(node,count);
            node = node.next;
            count++;
        }
    }
    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
          yield node;
          node = node.next;
        }
    }

}

module.exports = { Node, LinkedList };
