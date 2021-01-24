import { AbstractQueue } from './helpers/AbstractQueue';
import { Node } from './helpers/Node';

export class RingBuffer<T> extends AbstractQueue<T> {
  constructor(readonly capacity: number) {
    super();
    this.capacity = capacity;
  }

  get(index: number): T | undefined {
    return super.get(index);
  }

  push(element: T): void {
    this.enqueue(element);
  }

  enqueue(element: T): void {
    if (this.capacity === 0) {
      return;
    }

    if (this.size === this.capacity) {
      this.shift();
      this.size = this.capacity;
    } else {
      this.size++;
    }

    const newNode = new Node<T>(element);
    if (this.size === 1) {
      this.front = newNode;
      this.back = newNode;
    } else {
      newNode.prev = this.back;
      this.back!.next = newNode;
      this.back = newNode;
    }
  }

  shift(): T | undefined {
    return super.dequeue();
  }
}
