/**
 * Created by zh on 2018/5/11.
 */
import { shallow } from 'vue-test-utils';
import Test2 from '@/components/Test2';

describe('Test for Test2 Component', () => {
  let wrapper;

  describe('Test Computed', () => {
    beforeEach(() => {
      wrapper = shallow(Test2);
    });

    afterEach(() => {
      wrapper.destroy()
    });

    it('returns the string in normal order if reversed property is not true', () => {
      wrapper.setProps({needReverse: false});
      wrapper.vm.inputValue = 'ok';
      expect(wrapper.vm.outputValue).toBe('ok')
    });

    it('returns the string in normal order if reversed property is not provided', () => {
      wrapper.vm.inputValue = 'ok';
      expect(wrapper.vm.outputValue).toBe('ok')
    });

    it('returns the string in reversed order if reversed property is true', () => {
      wrapper.setProps({needReverse: true});
      wrapper.vm.inputValue = 'ok';
      expect(wrapper.vm.outputValue).toBe('ko')
    })
  });

  describe('Test watch', () => {
    let spy;
    beforeEach(() => {
      wrapper = shallow(Test2);
      spy = jest.spyOn(console, 'log')
    });

    afterEach(() => {
      wrapper.destroy();
      spy.mockClear()
    });

    // it('is not called if value is empty (trimmed)', () => {
    // });
    //
    // it('is not called if values are the same', () => {
    // });

    it('is called with the different values', (done) => {
      wrapper.vm.inputValue = 'ok';
      wrapper.vm.$nextTick(()=>{
        expect(spy).toBeCalled();
        done()
      })
    });

    it('is not called with same value', (done) => {
      wrapper.vm.inputValue = 'ok';
      wrapper.vm.$nextTick(()=>{
        // 清除已发生的状态
        spy.mockClear();
        wrapper.vm.inputValue = 'ok';
        wrapper.vm.$nextTick(()=>{
          expect(spy).not.toBeCalled();
          done()
        })
      })
    });
  });
});
