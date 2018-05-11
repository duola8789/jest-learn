/**
 * Created by zh on 2018/5/10.
 */
import {mount} from 'vue-test-utils';
import MyButton from '@/components/MyButton';

describe('Test for MyButton Component', () => {
  // 点击后会触发increment方法
  it('calls increment when click on button', () => {
    const wrapper = mount(MyButton);
    // 创建mock函数
    const mockFn = jest.fn();
    // 设置 Wrapper vm 的方法并强制更新。
    wrapper.setMethods({
      increment: mockFn
    });
    // 触发按钮的点击事件
    wrapper.find('button').trigger('click');
    expect(mockFn).toBeCalled();
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith('clicked');
    wrapper.destroy()
  });

  // increment方法会触发add方法
  it('triggers a addCounter event when a handleClick method is called', () => {
    const wrapper = mount(MyButton);

    const mockFn1 = jest.fn();

    wrapper.vm.$on('add', mockFn1);

    // 触发按钮的点击事件
    wrapper.find('button').trigger('click');
    expect(mockFn1).toBeCalled();
    expect(mockFn1).toHaveBeenCalledWith(1);

    // 再次触发按钮的点击事件
    wrapper.find('button').trigger('click');
    expect(mockFn1).toHaveBeenCalledTimes(2);
    expect(mockFn1).toHaveBeenCalledWith(2);
  });
});
