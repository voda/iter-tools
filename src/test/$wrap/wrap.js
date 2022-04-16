/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$wrap.js#1643907550855
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
const wrappedIterables = [];

function* wrap_(iterable) {
  yield* iterable;
}

class TestWrapper {
  constructor(source, deep = false) {
    this.source = source[Symbol.iterator]();
    this.deep = deep;
    this.started = false;
    this.returned = false;
    this.done = false;

    wrappedIterables.push(this);
  }

  next() {
    this.started = true;
    const { done, value } = this.source.next();
    this.done = done;

    return {
      value: this.deep && Array.isArray(value) ? new TestWrapper(wrap_(value), true) : value,
      done,
    };
  }

  return(value) {
    if (this.done) {
      throw new Error('Called return on an iterator that was done');
    }
    this.returned = this.done = true;
    this.source.return();
    return { value, done: true };
  }

  [Symbol.iterator]() {
    return this;
  }
}

export function wrap(iterable) {
  return new TestWrapper(wrap_(iterable));
}

export function wrapDeep(iterable) {
  return new TestWrapper(wrap_(iterable), true);
}

beforeEach(() => {
  wrappedIterables.length = 0;
});

afterEach(() => {
  for (const wrapped of wrappedIterables) {
    if (wrapped.started && !wrapped.done) {
      throw new Error('Not all iterables returned');
    }
  }
});
