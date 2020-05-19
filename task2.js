'use strict';

// Linked List example

// Node constructor
function Node(data) {
    this.data = data;
    this.next = null;
}
// List contructor
function SinglyList() {
    this._length = 0;
    this.head = null;
}
// Method to add node to list
SinglyList.prototype.add = function(value) {
    var node = new Node(value),
        currentNode = this.head;
    // If the list is empty create new node, increase node counter
    if (!currentNode) {
        this.head = node;
        this._length++;
 
        return node;
    }
    // If list is not empty, loop through to the end of the list
    while (currentNode.next) {
        currentNode = currentNode.next;
    }
    // Creat new node at end, increase node counter
    currentNode.next = node;
    this._length++;
    // Return new node
    return node;
};
// Initialize new Linked list 'list'
let list = new SinglyList();
console.log(list);

// Add "Hello" and "World" to list
list.add('Hello');
console.log(list);
list.add('World');
console.log(list);