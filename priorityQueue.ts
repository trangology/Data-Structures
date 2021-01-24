import { AbstractQueue } from './helpers/AbstractQueue';
import { Node } from './helpers/Node';
import { Priority } from './helpers/Priority';

export class PriorityQueue<T> extends AbstractQueue<T> {
  constructor() {
    super();
  }

  enqueue(element: T, priority: Priority): void {
    const newNode = new Node<T>(element, priority);

    if (this.size === 0) {
      this.front = newNode;
      this.size++;

      return;
    }

    this.size++;
    let curNode = this.front;

    //case 1: the first node has lower priority than new node
    if (curNode !== undefined && priority > curNode.priority!) {
      newNode.next = curNode;
      curNode!.prev = newNode;
      this.front = newNode;
    } else {
      // case 2: the nodes which are between the first and the last node
      // has lower priority than new node
      while (curNode!.next !== undefined) {
        if (priority > curNode!.next.priority!) {
          newNode.prev = curNode;
          newNode.next = curNode!.next;
          curNode!.next.prev = newNode;
          curNode!.next = newNode;

          return;
        }
        curNode = curNode!.next;
      }
      // case 3: all nodes are having priorities greater than new node
      curNode!.next = newNode;
      newNode.prev = curNode;
    }
  }

  dequeue(): T | undefined {
    return super.dequeue();
  }
}
