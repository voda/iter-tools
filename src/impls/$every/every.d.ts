/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$every.d.ts#1643907550729
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { Wrappable } from '../../types/iterable';

declare function every<T>(predicate: (value: T) => boolean): (iterable: Wrappable<T>) => boolean;

declare function every<T>(predicate: (value: T) => boolean, iterable: Wrappable<T>): boolean;

export { every };
