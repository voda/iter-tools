/**
 * @generated-from ./$split-on-any.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { SourceIterable as SyncSourceIterable } from '../../types/iterable';
import { AsyncSourceIterable, AsyncResultIterable } from '../../types/async-iterable';
declare function asyncSplitOnAny(
  separatorValues: SyncSourceIterable<string>,
): (source: string) => AsyncResultIterable<string>;
declare function asyncSplitOnAny(
  separatorValues: SyncSourceIterable<any>,
): <T>(source: AsyncSourceIterable<T>) => AsyncResultIterable<AsyncResultIterable<T>>;
declare function asyncSplitOnAny(
  separatorValues: SyncSourceIterable<string>,
  source: string,
): AsyncResultIterable<string>;
declare function asyncSplitOnAny<T>(
  separatorValues: SyncSourceIterable<any>,
  source: AsyncSourceIterable<T>,
): AsyncResultIterable<AsyncResultIterable<T>>;
export default asyncSplitOnAny;
