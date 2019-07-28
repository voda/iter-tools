/**
 * @generated-from ./$slice.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { AsyncInputIterable, AsyncIterableIterator } from './internal/async-iterable';
declare function asyncSlice<T = any>(
  opts:
    | number
    | {
        readonly start?: number;
        readonly end?: number;
        readonly step?: number;
      },
): (iterable: AsyncInputIterable<T>) => AsyncIterableIterator<T>;
declare function asyncSlice<T = any>(
  opts:
    | number
    | {
        readonly start?: number;
        readonly end?: number;
        readonly step?: number;
      },
  iterable: AsyncInputIterable<T>,
): AsyncIterableIterator<T>;
export default asyncSlice;
