import { Node } from './helpers/Node';

export class LinkedList<T> {
  size: number;

  private head: Node<T> | undefined;
  private tail: Node<T> | undefined;
  private curIndex: number;

  constructor() {
    this.size = 0;
    this.head = undefined;
    this.tail = undefined;
    this.curIndex = 0;
  }

  next(): T {
    this.curIndex++;

    return this.get(this.curIndex - 1);
  }

  prev(): T {
    this.curIndex--;

    return this.get(this.curIndex + 1);
  }

  // returns data of node by specified index
  get(index: number): T {
    if (index < 0 || index >= this.size) {
      throw RangeError;
    }

    if (index === 0) {
      return this.head!.value;
    }

    if (index === this.size - 1) {
      return this.tail!.value;
    }

    let curNode = this.head;
    for (let i = 0; i < index - 1; i++) {
      curNode = curNode!.next;
    }

    return curNode!.value;
  }

  // adds node to the end of the list
  push(value: T): void {
    const newNode = new Node(value);

    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail!.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  // returns data of last node of the list
  pop(): T {
    if (this.size === 0) {
      throw Error('This linked list is EMPTY!');
    }

    const lastNode = this.tail!.value;
    const prevNode = this.tail!.prev;

    // is this direction okay for destructuring the last node?
    if (prevNode !== undefined) {
      prevNode.next = undefined;
      this.tail = prevNode;
    }
    this.size--;

    return lastNode;
  }

  // adds a node at the begin of the list
  unshift(value: T): void {
    const newNode = new Node(value);

    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head!.prev = newNode;
      this.head = newNode;
    }

    this.size++;
  }

  // returns data of first node of the list
  // then removes first node
  shift(): T {
    if (this.size === 0) {
      throw new Error('This linked list is EMPTY!');
    }

    const firstNode = this.head!.value;
    const nextNode = this.head!.next;

    if (nextNode !== undefined) {
      nextNode.prev = undefined;
      this.head = nextNode;
    }
    this.size--;

    return firstNode;
  }
}
