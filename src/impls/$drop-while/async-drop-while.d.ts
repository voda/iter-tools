/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$drop-while.d.ts#1643907550725
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { AsyncWrappable, AsyncIterableIterator } from '../../types/async-iterable';

declare function asyncDropWhile<T>(
  predicate: (value: T, i: number) => boolean | Promise<boolean>,
): (source: AsyncWrappable<T>) => AsyncIterableIterator<T>;

declare function asyncDropWhile<T>(
  predicate: (value: T, i: number) => boolean | Promise<boolean>,
  source: AsyncWrappable<T>,
): AsyncIterableIterator<T>;

export { asyncDropWhile };
