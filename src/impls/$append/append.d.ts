/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$append.d.ts#1643907550715
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { Wrappable, IterableIterator } from '../../types/iterable';

declare function append<T, V>(value: V, source: Wrappable<T>): IterableIterator<V | T>;

declare function append<V>(value: V): <T>(source: Wrappable<T>) => IterableIterator<V | T>;

export { append };
