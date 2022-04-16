/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$forkerate.js#1649946656865
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { ensureIterable } from '../../internal/iterable.js';
import { Exchange } from '../../internal/fork.js';
import { Peekerator } from '../../internal/peekerator.js';

const _ = Symbol.for('_');

class Forkerator extends Peekerator {
  static from(source) {
    const exchange = new Exchange(ensureIterable(source)[Symbol.iterator]());
    return super.from(exchange.fork(), exchange);
  }

  constructor(iterator, first, exchange) {
    super(iterator, first);

    this[_].exchange = exchange;
  }

  advance(n = 1) {
    for (let i = 0; i < n; i++) {
      super.advance();
      this[_].exchange.advance();
    }
    return this;
  }

  fork() {
    return this[_].exchange.fork();
  }

  [Symbol.iterator]() {
    return this[_].exchange.fork();
  }
}

export function __forkerate(source) {
  return Forkerator.from(source);
}

function wrapWithEnsureIterable(fn) {
  return (source) => fn(ensureIterable(source));
}

export const forkerate = wrapWithEnsureIterable(__forkerate);
