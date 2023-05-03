import { $Promise, $MaybePromise } from '../../../generate/async.macro.cjs';

import { $Wrappable } from '../../types/$iterable';

declare function $findBestOr<N, T>(
  notFoundValue: N,
  comparer: (value: T, i: number) => boolean,
): (iterable: $Wrappable<T>) => $Promise<T | N>;

declare function $findBestOr<N, T>(
  notFoundValue: N,
  comparer: (value: T, i: number) => boolean,
  iterable: $Wrappable<T>,
): $Promise<T | N>;

declare function $findBestOr<N, T, S>(
  notFoundValue: N,
  comparer: (value: S, i: number) => boolean,
  mapper: (value: T, i: number) => $MaybePromise<S>,
): (iterable: $Wrappable<T>) => $Promise<T | N>;

declare function $findBestOr<N, T, S>(
  notFoundValue: N,
  comparer: (value: S, i: number) => boolean,
  mapper: (value: T, i: number) => $MaybePromise<S>,
  iterable: $Wrappable<T>,
): $Promise<T | N>;

export { $findBestOr };