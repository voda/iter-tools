/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$size.spec.ts#1643907550756
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import assert from 'static-type-assert';
import { asyncSize } from 'iter-tools-es';

declare const Ø: never;

assert<Promise<4>>(asyncSize(Ø as [0, 1, 2, 3]));
assert<Promise<0 | 1 | 2>>(asyncSize(Ø as [] | [number] | [number, number]));
assert<Promise<number>>(asyncSize(Ø as Array<number>));
assert<Promise<number>>(asyncSize(Ø as string));
