import { $Promise } from '../../../generate/async.macro.cjs';

import { $SourceIterable } from '../../types/$iterable';

declare function $startsWithAny(
  values: Array<any>,
): (iterable: $SourceIterable<any>) => $Promise<boolean>;

declare function $startsWithAny(
  values: Array<any>,
  iterable: $SourceIterable<any>,
): $Promise<boolean>;

export { $startsWithAny };