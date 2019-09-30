/**
 * @generated-from ./$first.spec.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import assert from 'static-type-assert';
import { AsyncIterable } from '../../../internal/async-iterable';
import { asyncFirst } from '../../..';
declare var Ø: never;
assert<Promise<undefined>>(asyncFirst(Ø as []));
assert<Promise<0>>(asyncFirst(Ø as [0, 1, 2, 3]));
assert<Promise<number>>(asyncFirst(Ø as [number, ...any[]]));
assert<Promise<number | undefined>>(asyncFirst(Ø as AsyncIterable<number>));
assert<Promise<string | undefined>>(asyncFirst(Ø as string));
