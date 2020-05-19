# SDV503-Week-11

File: index.js
Contains work from Mondays class (18/05/2020)

Class Activity
19/05/2020

## Task 1:
Write an introduction of JavaScript Data Structure stores and briefly 
explain each Data structure store. (Provide with your explanation 
pseudocodes)

A Data Structure is a way in which JavaScipt stores data, of which 
there are three main types:
1. Linked Lists, this form of data structure stores data within 
nodes, the nodes also contain a pointer that points to the next 
and/or previous node in the chain. Unlike an array which uses indexes.
Using pseudocode a node constructor looks something like this:

Node {
    this.data = 'someData'; // data that has been stored within the node
    this.next = null        // value of next node, null if this is the final node
    this.prev = null        // same as this.next but for the previous node
}

2. Hash Tables; a hash table has a structure similar to an object {} 
in that it stores data with an assigned key. Though in the case of 
hash tables the key values are usually numerical.
This does however make them vulnerable to Hash Table Collisions, 
which is when a Hash Function returns the same hash for multiple 
values.

3. Stacks and Queues are similar to arrays but differ in how the data 
is stored and/or removed. Linked lists can be used with these for 
greater functionality.


## Task 2:
More on Linked Lists:
Building what I've already mentioned in Task 1, Linked Lists can have 
pointers in both directions, but must have at least one pointer 
direction. Whether you do one or the other or both depends on what 
the linked list has been/is being designed for.

The lack of indexes means that Linked Lists are faster than an array 
at having data added or removed. Editing a Linked List means changing 
a couple of node pointers, whereas editing an array causes every 
value down the line to be moved to their new index.
Resulting in Linked List editing being a constant-time operation, 
while array editing is a liniar-time operation.
This makes Linked Lists more effeceint than arrays for tasks such as 
stacks and queues.

Linked Lists are comparable to the Treasure Hunt game, where one clue 
leads to another before reaching the end. In this case, each clue can 
be considered a node containing a pointer to the next clue.

The example in task2.js was built with the help of:
Cho S. Kim. (2015, September 17). Data Structures With JavaScript: Singly-Linked List and Doubly-Linked List. https://code.tutsplus.com/articles/data-structures-with-javascript-singly-linked-list-and-doubly-linked-list--cms-23392

### Pseudocode example of adding a new node to list
if (empty list) {
        create new node
    }
while (next node exists) {
    move to next node
}
create new node
}

### Example diagram of a linked list:
              Node               Node
HEAD --> [Data, Pointer] --> [Data, Pointer] --> TAIL


## Task 3:
JavaScript Recursive Functions:
Recurisve Functions are designed to continually call themselves 
untill they reach their finishing condition. Meaning that if the 
finishing condition was unreachable, the recursive function would 
attempt to continue forever. They are, in essence, very similar to 
foreach loops.

### Diagram for recursive function
![alt text] (https://www.cdn.geeksforgeeks.org/wp-content/uploads/Recursive-Functions-in-c.png "Recursive Function Diagram")

Using recursion over iteration allows us to cut back variable usage.
However it is very easy to make these functions loop infinitely, 
easily causing crashes. For this reason we use a 'base case' (this is 
the proper term for the stopping condition I already mentioned) which 
is meant to stop the recursion once it's job is done.

### Base case real world example using Russian Matryoshka dolls:
if (doll does not exist) {
    exit recursion
}
open doll

Recursive functions are good for working with Tree data structures. 
Specifically in Depth-First Traversal (DFT), which is when you move 
through the Tree vertically.
Trees are similar to Linked Lists. However, Trees can have multiple child 
nodes, but these are limited to a hierarchical structure.

Working recursive function in: task3.js