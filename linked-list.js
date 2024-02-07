/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */
  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      // If the list is empty, set both head and tail to the new node
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Otherwise, add the new node to the end and update the tail
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  /** unshift(val): add new value to start of list. */
  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      // If the list is empty, set both head and tail to the new node
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Otherwise, add the new node to the start and update the head
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }

  /** pop(): return & remove last item. */
  pop() {
    if (!this.head) {
      // If the list is empty, return undefined
      return undefined;
    }

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    // Update tail to the newTail and set next of newTail to null
    this.tail = newTail;
    this.tail.next = null;

    // If there was only one node, set head and tail to null
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }

    this.length--;

    return current.val;
  }

  /** shift(): return & remove first item. */
  shift() {
    if (!this.head) {
      // If the list is empty, return undefined
      return undefined;
    }

    const removedNode = this.head;
    this.head = removedNode.next;

    // If the list becomes empty after the shift, update tail to null
    if (!this.head) {
      this.tail = null;
    }

    this.length--;

    return removedNode.val;
  }

  /** getAt(idx): get val at idx. */
  getAt(idx) {
    if (idx < 0 || idx >= this.length) {
      return undefined;
    }

    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }

    return current.val;
  }

  /** setAt(idx, val): set val at idx to val */
  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) {
      return undefined;
    }

    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }

    current.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */
  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) {
      return undefined;
    }

    if (idx === 0) {
      this.unshift(val);
      return;
    }

    if (idx === this.length) {
      this.push(val);
      return;
    }

    const newNode = new Node(val);
    let current = this.head;
    let prev = null;

    for (let i = 0; i < idx; i++) {
      prev = current;
      current = current.next;
    }

    prev.next = newNode;
    newNode.next = current;

    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */
  removeAt(idx) {
    if (idx < 0 || idx >= this.length) {
      return undefined;
    }

    if (idx === 0) {
      return this.shift();
    }

    if (idx === this.length - 1) {
      return this.pop();
    }

    let current = this.head;
    let prev = null;

    for (let i = 0; i < idx; i++) {
      prev = current;
      current = current.next;
    }

    prev.next = current.next;

    this.length--;

    return current.val;
  }

  /** average(): return an average of all values in the list */
  average() {
    if (this.length === 0) {
      return undefined;
    }

    let sum = 0;
    let current = this.head;

    while (current) {
      sum += current.val;
      current = current.next;
    }

    return sum / this.length;
  }
}
