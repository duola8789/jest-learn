/**
 * Created by zh on 2018/5/11.
 */

// jest.mock('axios', () => ({
//   get: jest.fn()
// }));

const mockData = {
  data: {
    answer: 'mock_yes',
    image: 'mock.png'
  }
};

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve(mockData))
}));

import { shallow } from 'vue-test-utils';
import Test3 from '@/components/Test3';
import axios from 'axios';

describe('Test for Test3 Component', () => {
  let wrapper;

  beforeEach(() => {
    axios.get.mockClear();
    wrapper = shallow(Test3);
  });

  it('getAnswer Fn should be called', () => {
    const mockFn = jest.fn();
    wrapper.setMethods({ getAnswer: mockFn });
    wrapper.find('button').trigger('click');
    expect(mockFn).toBeCalled();
  });

  it('Calls get promise result', () => {
    wrapper.find('button').trigger('click');
    expect(axios.get).toBeCalled();
  })

});
