/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$includes.d.ts#1643907550742
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { AsyncWrappable } from '../../types/async-iterable';

declare function asyncIncludes(
  same: (a: any, b: any) => boolean,
  value: any,
): (iterable: AsyncWrappable<any>) => Promise<boolean>;

declare function asyncIncludes(
  same: (a: any, b: any) => boolean,
  value: any,
  iterable: AsyncWrappable<any>,
): Promise<boolean>;

declare function asyncIncludes(value: any, iterable: AsyncWrappable<any>): Promise<boolean>;

export { asyncIncludes };
