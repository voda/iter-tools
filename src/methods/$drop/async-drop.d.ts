/**
 * @generated-from ./$drop.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { AsyncSourceIterable, AsyncResultIterable } from '../../types/async-iterable';
declare function asyncDrop<T>(n: number, iterable: AsyncSourceIterable<T>): AsyncResultIterable<T>;
declare function asyncDrop<T>(
  n: number,
): (iterable: AsyncSourceIterable<T>) => AsyncResultIterable<T>;
export default asyncDrop;
