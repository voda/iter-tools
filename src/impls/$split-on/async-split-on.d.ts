/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$split-on.d.ts#1643907550763
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { AsyncWrappable, AsyncIterableIterator } from '../../types/async-iterable';

declare function asyncSplitOn(
  same: (a: any, b: any) => boolean,
  separatorValue: any,
): <T>(source: AsyncWrappable<T>) => AsyncIterableIterator<AsyncIterableIterator<T>>;

declare function asyncSplitOn<T>(
  same: (a: any, b: any) => boolean,
  separatorValue: any,
  source: AsyncWrappable<T>,
): AsyncIterableIterator<AsyncIterableIterator<T>>;

declare function asyncSplitOn<T>(
  separatorValue: any,
  source: AsyncWrappable<T>,
): AsyncIterableIterator<AsyncIterableIterator<T>>;

export { asyncSplitOn };
