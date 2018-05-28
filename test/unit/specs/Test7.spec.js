/**
 * Created by zh on 2018/5/11.
 */
// jest.useFakeTimers();

import { shallow } from 'vue-test-utils';
import Test7 from '@/components/Test7';

import * as helper from '@/helper';

// const test = helper.forData;

describe('Test for Test7 Component', () => {
  let wrapper;

  beforeEach(() => {
    jest.restoreAllMocks();
    const mockResult = [{name: 1}, {name: 2}];
    helper.forData = jest.fn(() => (Promise.resolve(mockResult)));
    wrapper = shallow(Test7);
  });

  afterEach(() => {
    wrapper.destroy()
  });

  it('test for getResult', async () => {
    // 设定forData返回值
    const mockResult = 0;
    const mockFn = jest.fn(() => (Promise.resolve(mockResult)));
    helper.forData = mockFn;

    // 执行
    await wrapper.vm.getResult();
    // 断言
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(wrapper.vm.result).toBe('000')
  });

  it('test for getResult', async () => {
    // 设定forData返回值
    const mockResult = 1;
    const mockFn = jest.fn(() => (Promise.resolve(mockResult)));
    helper.forData = mockFn;

    // 执行
    await wrapper.vm.getResult();
    // 断言
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(wrapper.vm.result).toBe('111')
  });

  it('test for getQuestion', async () => {
    // 设定forData返回值
    const mockFn = jest.fn()
      .mockImplementationOnce(() => (Promise.resolve(1)))
      .mockImplementationOnce(() => (Promise.resolve(2)));
    helper.forData = mockFn;

    // 执行
    await wrapper.vm.getQuestion();
    // 断言
    expect(mockFn).toHaveBeenCalledTimes(2);
    expect(wrapper.vm.result).toBe('333')
  });
});
