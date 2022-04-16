/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$fork.js#1649946656918
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { AsyncIterableIterator } from './async-iterable-iterator.js';
import { asyncCallReturn } from './async-iterable.js';

// Queue item instances are shared between all forks.
class QueueItem {
  constructor(step) {
    this.step = step;
    this.next = null;
  }
}

class AsyncFork extends AsyncIterableIterator {
  constructor(head, exchange) {
    super();

    this.head = head;
    this.done = false;
    this.exchange = exchange;
  }

  async next() {
    const { done, exchange } = this;

    if (done) {
      return { value: undefined, done };
    } else {
      let { head } = this;

      if (!head.next) await exchange.fetch();

      head = head.next;
      const { step } = head;

      this.done = step.done;
      this.head = head;

      return step;
    }
  }

  async return() {
    const { done, exchange } = this;

    if (!done) await exchange.return();
    return { value: undefined, done: true };
  }
}

export class AsyncExchange {
  constructor(iterator) {
    this.iterator = iterator;
    this.tail = new QueueItem(null);
    this.head = this.tail;
    this.forks = 0;
  }

  fork() {
    ++this.forks;
    return new AsyncFork(this.tail, this);
  }

  advance() {
    this.tail = this.tail.next;
  }

  async fetch() {
    const step = await this.iterator.next();
    const newItem = new QueueItem(step);
    this.head.next = this.head = newItem;
  }

  async return() {
    --this.forks;
    if (this.forks === 0) {
      await asyncCallReturn(this.iterator);
    }
    return { value: undefined, done: true };
  }
}
