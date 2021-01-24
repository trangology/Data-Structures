import { AbstractQueue } from './helpers/AbstractQueue';
import { Node } from './helpers/Node';

export class Queue<T> extends AbstractQueue<T> {
  constructor() {
    super();
  }

  enqueue(element: T): void {
    const newNode = new Node(element);

    if (this.size === 0) {
      this.front = newNode;
      this.back = newNode;
    } else {
      newNode.prev = this.back;
      this.back!.next = newNode;
      this.back = newNode;
    }
    this.size++;
  }

  dequeue(): T | undefined {
    return super.dequeue();
  }

  get(index: number): T | undefined {
    if (index === 0) {
      return super.get(this.size - 1);
    }

    return super.get(index - 1);
  }
}
