/**
 * @generated-from ./$enumerate.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { InputIterable, IterableIterator } from './internal/iterable';
declare function enumerate<T = any>(
  iterable: InputIterable<T>,
  start?: number,
): IterableIterator<[number, T]>;
export default enumerate;
