/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$find.spec.ts#1643907550732
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import assert from 'static-type-assert';
import { Iterable } from '../../../types/iterable';
import { find } from 'iter-tools-es';

declare const Ø: never;

assert<number | undefined>(find(Ø as (value: number) => any, Ø as Iterable<number>));

assert<2 | undefined>(find(Ø as (value: number) => value is 2, Ø as Iterable<number>));
