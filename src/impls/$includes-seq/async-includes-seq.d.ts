/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$includes-seq.d.ts#1643907550741
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { AsyncWrappable } from '../../types/async-iterable';

declare function asyncIncludesSeq(
  same: (a: any, b: any) => boolean,
  seq: AsyncWrappable<any>,
): (iterable: AsyncWrappable<any>) => Promise<boolean>;

declare function asyncIncludesSeq(
  same: (a: any, b: any) => boolean,
  seq: AsyncWrappable<any>,
  iterable: AsyncWrappable<any>,
): Promise<boolean>;

declare function asyncIncludesSeq(
  seq: AsyncWrappable<any>,
  iterable: AsyncWrappable<any>,
): Promise<boolean>;

export { asyncIncludesSeq };
