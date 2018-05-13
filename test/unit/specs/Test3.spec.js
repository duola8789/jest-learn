/**
 * Created by zh on 2018/5/11.
 */
const mockData = {
  data: {
    answer: 'mock_yes',
    image: 'mock.png'
  }
};

// jest.mock('axios', () => ({
//   get: jest.fn()
// }));

// jest.mock('axios', () => ({
//   get: jest.fn(() => Promise.resolve(mockData))
// }));

import { shallow } from 'vue-test-utils';
import Test3 from '@/components/Test3';
import axios from 'axios';

describe('Test for Test3 Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(Test3);
    axios.get.mockClear();
  });

  // beforeEach(() => {
  //   wrapper = shallow(Test3);
  //   jest.resetModules();
  //   jest.clearAllMocks();
  // });

  afterEach(() => {
    wrapper.destroy()
  });

  // 点击按钮后调用了 getAnswer 方法
  it('getAnswer Fn should be called', () => {
    const mockFn = jest.fn();
    wrapper.setMethods({ getAnswer: mockFn });
    wrapper.find('button').trigger('click');
    expect(mockFn).toBeCalled();
  });

  // 点击按钮后调用了axios.get方法
  it('axios.get Fn should be called', () => {
    const URL = 'https://yesno.wtf/api';
    wrapper.find('button').trigger('click');
    expect(axios.get).toBeCalledWith(URL)
  });

  // axios.get方法返回值（Promise）
  it('Calls get promise result 1', () => {
    return expect(wrapper.vm.getAnswer()).resolves.toEqual(mockData);
  });

  // 上面等同于
  it('Calls get promise result 2', () => {
    return wrapper.vm.getAnswer().then(result => {
      expect(result).toEqual(mockData);
      expect(wrapper.vm.answer).toBe('mock_yes');
      expect(wrapper.vm.src).toBe('mock.png');
    })
  });

  // 可以用 Async/Await 测试 axios.get 方法返回值
  it('Calls get promise result 3', async () => {
    const result = await wrapper.vm.getAnswer();
    expect(result).toEqual(mockData);
    expect(wrapper.vm.answer).toBe('mock_yes');
    expect(wrapper.vm.src).toBe('mock.png');
  });

  // 上面等同于
  it('Calls get promise result 4', async () => {
    await expect(wrapper.vm.getAnswer()).resolves.toEqual(mockData)
  });

  // 如果不清除模块状态此条断言会失败
  it('Axios should not be called here', () => {
    expect(axios.get).not.toBeCalled()
  });
});
