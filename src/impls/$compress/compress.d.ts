/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$compress.d.ts#1643907550719
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { Wrappable, IterableIterator } from '../../types/iterable';

declare function compress<T>(
  source: Wrappable<T>,
  included: Wrappable<boolean>,
): IterableIterator<T>;

export { compress };
