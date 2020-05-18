# SDV503-Week-11

File: index.js
Contains work from Mondays class (18/05/2020)

Class Activity
19/05/2020

Task 1:
Write an introduction of JavaScript Data Structure stores and briefly 
explain each Data structure store. (Provide with your explanation 
pseudocodes)

A Data Structure is a way in which JavaScipt stores data, of which 
there are three main types:
1. Linked Lists, this form of data structure stores data within 
nodes, the nodes also contain a pointer that points to the next 
and/or previous node in the chain. Unlike an array which uses indexes.
Using pseudocode each node looks something like this:

node {
    this.data = 'someData'; // data that has been stored within the node
    this.next = null        // value of next node, null if this is the final node
    this.prev = null        // same as this.next but for the previous node
}


2. Hash Tables; a hash table has a structure similar to an object {} 
in that it stores data with an assigned key. Though in the case of 
hash tables the key values are usually numerical.




3. Stacks and Queues are similar to arrays but differ in how the data 
is stored and/or removed.







Task 2:
More on Linked Lists
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

d. Provide pseudocodes, diagrams and executable code. (create a js file for executable code)

Example diagram of a linked list:
              Node               Node
HEAD --> [Data, Pointer] --> [Data, Pointer] --> TAIL


Task 3:
Explain in details JavaScript Recursion:
a. Introduction to Recursion.
b. What are the advantages and disadvantages using JavaScript Recursion?
c. Which data structure stores you can Recursion algorithm?
d. Provide Real world examples
e. Provide pseudocodes, diagrams and executable code. (create a js file for executable code)