/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$split-on-any.d.ts#1643907550761
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { Wrappable, IterableIterator } from '../../types/iterable';

declare function splitOnAny(
  same: (a: any, b: any) => boolean,
  separatorValues: any,
): <T>(source: Wrappable<T>) => IterableIterator<IterableIterator<T>>;

declare function splitOnAny<T>(
  same: (a: any, b: any) => boolean,
  separatorValues: any,
  source: Wrappable<T>,
): IterableIterator<IterableIterator<T>>;

declare function splitOnAny<T>(
  separatorValues: any,
  source: Wrappable<T>,
): IterableIterator<IterableIterator<T>>;

export { splitOnAny };
