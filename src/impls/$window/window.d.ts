/**
 * @generated-from ./$window.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import {
  SourceIterable,
  ResultIterable,
  ResultIterable as SyncResultIterable,
} from '../../types/iterable';

declare function window<T>(
  size: number,
  source: SourceIterable<T>,
): ResultIterable<SyncResultIterable<T>>;

declare function window(
  size: number,
): <T>(source: SourceIterable<T>) => ResultIterable<SyncResultIterable<T>>;

export { window };