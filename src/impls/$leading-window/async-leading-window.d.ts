/**
 * @generated-from ./$leading-window.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { AsyncSourceIterable, AsyncResultIterable } from '../../types/async-iterable';
import { ResultIterable as SyncResultIterable } from '../../types/iterable';

declare function asyncLeadingWindow<T>(
  size: number,
  opts: {
    useFiller: false;
    readonly filler?: any;
  },
  source: AsyncSourceIterable<T>,
): AsyncResultIterable<SyncResultIterable<T>>;

declare function asyncLeadingWindow(
  size: number,
  opts?: {
    useFiller: false;
    readonly filler?: any;
  },
): <T>(source: AsyncSourceIterable<T>) => AsyncResultIterable<SyncResultIterable<T>>;

declare function asyncLeadingWindow<T, Filler = undefined>(
  size: number,
  opts: {
    useFiller?: boolean;
    readonly filler?: Filler;
  },
  source: AsyncSourceIterable<T>,
): AsyncResultIterable<SyncResultIterable<T | Filler>>;

declare function asyncLeadingWindow<T>(
  size: number,
  source: AsyncSourceIterable<T>,
): AsyncResultIterable<SyncResultIterable<T | undefined>>;

declare function asyncLeadingWindow<Filler = undefined>(
  size: number,
  opts?: {
    useFiller?: boolean;
    readonly filler?: Filler;
  },
): <T>(source: AsyncSourceIterable<T>) => AsyncResultIterable<SyncResultIterable<T | Filler>>;

export { asyncLeadingWindow };