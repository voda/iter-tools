/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$starts-with-any-seq.d.ts#1643907550767
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { AsyncWrappable } from '../../types/async-iterable';

declare function asyncStartsWithAnySeq(
  same: (a: any, b: any) => boolean,
  seqs: Array<AsyncWrappable<any>>,
): (iterable: AsyncWrappable<any>) => Promise<boolean>;

declare function asyncStartsWithAnySeq(
  same: (a: any, b: any) => boolean,
  seqs: Array<AsyncWrappable<any>>,
  iterable: AsyncWrappable<any>,
): Promise<boolean>;

declare function asyncStartsWithAnySeq(
  seqs: Array<AsyncWrappable<any>>,
  iterable: AsyncWrappable<any>,
): Promise<boolean>;

export { asyncStartsWithAnySeq };
