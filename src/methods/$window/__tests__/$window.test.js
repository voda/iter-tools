import { $, $async, $await } from '../../../../generate/async.macro';

import { $window, $map, $toArray } from '../../..';

describe($`window`, () => {
  it(
    'frames iterable',
    $async(() => {
      const iter = $window({ size: 3 }, [1, 2, 3, 4, 5]);
      expect($await($toArray($map(wndw => [...wndw], iter)))).toEqual([
        [1, 2, 3],
        [2, 3, 4],
        [3, 4, 5],
        [4, 5, undefined],
        [5, undefined, undefined],
      ]);
    }),
  );

  it(
    'frames iterable',
    $async(() => {
      const iter = $window({ size: 3, filler: 'x' }, [1, 2, 3, 4, 5]);
      expect($await($toArray($map(wndw => [...wndw], iter)))).toEqual([
        [1, 2, 3],
        [2, 3, 4],
        [3, 4, 5],
        [4, 5, 'x'],
        [5, 'x', 'x'],
      ]);
    }),
  );

  it(
    'frames iterable (window equal to the sequence)',
    $async(() => {
      const iter = $window({ size: 5 }, [1, 2, 3, 4, 5]);
      expect($await($toArray($map(wndw => [...wndw], iter)))).toEqual([
        [1, 2, 3, 4, 5],
        [2, 3, 4, 5, undefined],
        [3, 4, 5, undefined, undefined],
        [4, 5, undefined, undefined, undefined],
        [5, undefined, undefined, undefined, undefined],
      ]);
    }),
  );

  it(
    'frames iterable (window bigger than the sequence)',
    $async(() => {
      const iter = $window({ size: 6 }, [1, 2, 3, 4, 5]);
      expect($await($toArray($map(wndw => [...wndw], iter)))).toEqual([
        [1, 2, 3, 4, 5, undefined],
        [2, 3, 4, 5, undefined, undefined],
        [3, 4, 5, undefined, undefined, undefined],
        [4, 5, undefined, undefined, undefined, undefined],
        [5, undefined, undefined, undefined, undefined, undefined],
      ]);
    }),
  );

  it(
    'frames iterable (window bigger than the sequence) with filler',
    $async(() => {
      const iter = $window({ size: 6, filler: 'x' }, [1, 2, 3, 4, 5]);
      expect($await($toArray($map(wndw => [...wndw], iter)))).toEqual([
        [1, 2, 3, 4, 5, 'x'],
        [2, 3, 4, 5, 'x', 'x'],
        [3, 4, 5, 'x', 'x', 'x'],
        [4, 5, 'x', 'x', 'x', 'x'],
        [5, 'x', 'x', 'x', 'x', 'x'],
      ]);
    }),
  );

  it(
    'frames iterable (window bigger than the sequence) 2',
    $async(() => {
      const iter = $window({ size: 7 }, [1, 2, 3, 4, 5]);
      expect($await($toArray($map(wndw => [...wndw], iter)))).toEqual([
        [1, 2, 3, 4, 5, undefined, undefined],
        [2, 3, 4, 5, undefined, undefined, undefined],
        [3, 4, 5, undefined, undefined, undefined, undefined],
        [4, 5, undefined, undefined, undefined, undefined, undefined],
        [5, undefined, undefined, undefined, undefined, undefined, undefined],
      ]);
    }),
  );
});
