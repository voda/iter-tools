/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$to-object.js#1643907550781
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
import { ensureIterable } from '../../internal/iterable.js';

export function __toObject(iterable, proto = Object.prototype) {
  const obj = Object.create(proto);
  for (const [key, value] of iterable) {
    obj[key] = value;
  }
  return obj;
}

export function toObject(iterable, proto) {
  return __toObject(ensureIterable(iterable), proto);
}
