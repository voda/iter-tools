/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$take-last.d.ts#1643907550772
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { AsyncWrappable } from '../../types/async-iterable';

declare function asyncTakeLast<T>(iterable: AsyncWrappable<T>): Promise<T | undefined>;

export { asyncTakeLast };
