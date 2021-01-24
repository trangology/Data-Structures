import { Priority } from './Priority';

export class Node<T> {
  value: T;
  prev: Node<T> | undefined;
  next: Node<T> | undefined;
  priority: Priority | undefined;

  constructor(value: T, priority?: Priority) {
    this.value = value;
    this.priority = priority;
    this.prev = undefined;
    this.next = undefined;
  }
}