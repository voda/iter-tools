/* @macrome
 * @generatedby /generate/generators/impls/index.cjs
 * @generatedfrom ./$wrap.js#1643907550813
 * This file is autogenerated. Please do not edit it directly.
 * When editing run `npx macrome watch` then change the file this is generated from.
 */
export function* wrap(source) {
  yield* source;
}

export function* nullableWrap(source) {
  if (source != null) {
    yield* source;
  }
}
