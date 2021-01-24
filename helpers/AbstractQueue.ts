import { Node } from './Node';
import { Priority } from './Priority';

export abstract class AbstractQueue<T> {
  size: number;
  front: Node<T> | undefined;
  back: Node<T> | undefined;

  constructor() {
    this.size = 0;
    this.front = undefined;
    this.back = undefined;
  }

  abstract enqueue(element: T, priority?: Priority): void;

  get(index: number): T | undefined {
    if (this.size === 0 || index >= this.size) {
      return undefined;
    }
    if (index === 0) {
      return this.front!.value;
    }
    if (index === this.size - 1) {
      return this.back!.value;
    }

    let curElement = this.front;
    for (let i = 1; i < index; i++) {
      curElement = curElement!.next;
    }

    return curElement!.value;
  }

  dequeue(): T | undefined {
    if (this.size === 0) {
      return undefined;
    }

    const result = this.front!.value;

    if (this.size === 1) {
      this.front = undefined;
    } else {
      this.front = this.front!.next;
      this.front!.prev = undefined;
    }
    this.size--;

    return result;
  }
}
