/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$fork.test.ts#1643907550738
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { _awaitAsyncGenerator, _wrapAsyncGenerator } from '../../../internal/asyncish.js';

import { asyncFork, asyncMap } from 'iter-tools-es';
import { asyncWrap, asyncUnwrap } from '../../../test/async-helpers.js';

describe('asyncFork', () => {
  const asyncMakeIterable = _asyncMakeIterable;

  function _asyncMakeIterable() {
    return _asyncMakeIterable2.apply(this, arguments);
  }

  function _asyncMakeIterable2() {
    _asyncMakeIterable2 = _wrapAsyncGenerator(function* () {
      yield 1;
      yield 2;
      yield 3;
    });

    return _asyncMakeIterable2.apply(this, arguments);
  }

  it('creates an iterable of iterables with the same values as its source', async () => {
    const [a, b, c] = asyncFork(asyncMakeIterable());
    const originalIter = await asyncUnwrap(asyncMakeIterable());

    expect(await asyncUnwrap(asyncMap((iter) => asyncUnwrap(iter), [a, b, c]))).toEqual(
      Array(3).fill(originalIter),
    );
  });

  it('does not matter which order the fork iterables are consumed in', async () => {
    const [a, b, c] = asyncFork(asyncMakeIterable());
    const originalIter = await asyncUnwrap(asyncMakeIterable());
    expect(await asyncUnwrap(asyncMap((iter) => asyncUnwrap(iter), [c, b, a]))).toEqual(
      Array(3).fill(originalIter),
    );
  });

  describe('source iterable cleanup', () => {
    /* eslint-disable jest/expect-expect */
    it('happens when a fork is exhausted', async () => {
      const iterableIterator = asyncFork(asyncWrap([1, 2, 3]))[Symbol.iterator]();
      await asyncUnwrap(iterableIterator.next().value);
    });

    it('happens when fork is exhausted and then all forks are exhausted', async () => {
      const [a, b] = asyncFork(asyncWrap([1, 2, 3]));
      await a[Symbol.asyncIterator]().next();
      await a.return();
      await b[Symbol.asyncIterator]().next();
      await b.return();
    });

    it('happens when all forks are exhausted then fork is exhausted', async () => {
      const iterableIterator = asyncFork(asyncWrap([1, 2, 3]))[Symbol.iterator]();

      const a = iterableIterator.next().value;
      await a[Symbol.asyncIterator]().next();
      await a.return();

      const b = iterableIterator.next().value;
      await b[Symbol.asyncIterator]().next();
      await b.return();

      iterableIterator.return();
    });

    it('happens even when a fork is closed without being used', async () => {
      const [a, b] = asyncFork(asyncWrap([1, 2, 3]));
      await a.return();
      await b.return();
    });

    /* eslint-enable jest/expect-expect */
  });
});
