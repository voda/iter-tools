/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$forkerate.d.ts#1649946656865
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { Wrappable, IteratorResult, NonIterableIterator } from '../../types/iterable';

export interface ForkeratorIterator<T> {
  next(): IteratorResult<T>;
  return(): IteratorResult<T>;
  [Symbol.iterator](): NonIterableIterator<T>;
}

interface ForkeratorBase<T> {
  readonly index: number;

  /* eslint-disable no-use-before-define */
  advance(n?: number): Forkerator<T>;
  return(): Forkerator<T>;
  /* eslint-enaable no-use-before-define */
  fork(): ForkeratorIterator<T>;
  asIterator(): ForkeratorIterator<T>;
  [Symbol.iterator](): ForkeratorIterator<T>;
}

interface DoneForkerator<T> extends ForkeratorBase<T> {
  readonly current: { done: true; value: undefined };
  readonly done: true;
  readonly value: undefined;
}

interface ValueForkerator<T> extends ForkeratorBase<T> {
  readonly current: { done: false; value: T };
  readonly done: false;
  readonly value: T;
}

export type Forkerator<T> = DoneForkerator<T> | ValueForkerator<T>;

declare function forkerate<T>(source: Wrappable<T>): Forkerator<T>;

export { forkerate };
