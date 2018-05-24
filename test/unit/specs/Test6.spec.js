/**
 * Created by zh on 2018/5/11.
 */
// jest.useFakeTimers();

import { shallow } from 'vue-test-utils';
import Test6 from '@/components/Test6';
import _ from 'lodash';

jest.mock('lodash', () => ({
  debounce: jest.fn((fn => fn))
}));

describe('Test for Test6 Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(Test6);
  });

  afterEach(() => {
    wrapper.destroy()
  });

  it('test for lodash', () => {
    const mockFn2 = jest.fn();
    wrapper.setMethods({ handler: mockFn2 });
    wrapper.vm.addCounter();

    // jest.runAllTimers();
    // jest.runOnlyPendingTimers();

    expect(mockFn2).toHaveBeenCalledTimes(1);
  })
});
