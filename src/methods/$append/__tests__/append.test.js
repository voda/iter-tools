/**
 * @generated-from ./$append.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates,no-constant-condition */

import { append, toArray, wrap } from '../../..';
describe('append', () => {
  it('appends a value', () => {
    expect(toArray(append(3, wrap([1, 2])))).toEqual([1, 2, 3]);
  });
});