/**
 * @generated-from ./$zip-all.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { InputIterable, IterableIterator } from './internal/iterable';
declare function zipAll<T = any>(
  ...iterables: Array<InputIterable<T>>
): IterableIterator<Array<T | undefined>>;
export default zipAll;
