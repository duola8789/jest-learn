/**
 * Created by zh on 2018/5/3.
 */
import {sum, minus} from '@/helper'

describe('helper test', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('minus 5 - 2 to equal 3', () => {
    expect(minus(5, 2)).toBe(3);
  });

  test('object', () => {
    let obj = {value: 'a'};
    expect(obj.value).toEqual('a')
  });

  test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(a + b).not.toBe(0);
      }
    }
  });

  test('this is a joe in the sentence?', () => {
    expect('this is joe').toMatch('joe')
  });

  test('the Array contains the item?', () => {
    const arr = ['a', 'n', 'cc'];
    expect(arr).toContain('cc')
  });

  function fn() {
    throw new Error('this is a error')
  }

  test('function will throw an error', () => {
    expect(fn).toThrow();
    expect(fn).toThrow(Error);

    expect(fn).toThrow('this is a error');
    expect(fn).toThrow(/is/);
  });

  function fetchDate() {
    return new Promise((resolve, reject) => {
      setTimeout(reject, 3000, 'ok')
    })
  }

  test('the data is ok', () => {
    expect.assertions(1);
    return fetchDate().catch(val => {
      expect(val).toBe('ok')
    })
  });

  function asyncFetch() {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 3000, 'fine')
    })
  }

  test('async function to be tested', async () => {
    expect.assertions(1);
    const result = await asyncFetch();
    expect(result).toBe('fine')
  });

  const filterFn = jest.fn();
  filterFn.mockReturnValueOnce(true).mockReturnValueOnce(false);
  const result = [11, 22].filter(filterFn);
  test('mock value once', ()=>{
    expect(result).toEqual([11]);
    expect(result).not.toContain(22)
  });

  const mockFn = jest.fn().mockImplementation(val =>  val +100);
  console.log(mockFn(100))
});
