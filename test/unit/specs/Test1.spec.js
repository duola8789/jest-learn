/**
 * Created by zh on 2018/5/8.
 */
import {mount} from 'vue-test-utils';
import Test1 from '@/components/Test1';
import MyButton from '@/components/MyButton';


describe('Test for Test1 Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Test1, {
      propsData: {
        messages: ['bye', 'bye', 'bye']
      }
    });
  });

  afterEach(() => {
    wrapper.destroy()
  });

  // ------------DOM节点和样式-------
  it('is a Test1 component', () => {
    // 使用Vue组件选择器
    expect(wrapper.is(Test1)).toBe(true);
    // 使用CSS选择器
    expect(wrapper.is('.outer')).toBe(true);
    // 使用CSS选择器
    expect(wrapper.contains('p')).toBe(true)
  });

  // exists()：断言 Wrapper 或 WrapperArray 是否存在。
  it('不存在img', () => {
    expect(wrapper.findAll('img').exists()).toBeFalsy()
  });

  // isEmpty()：断言 Wrapper 并不包含子节点。
  it('MyButton组件不为空', () => {
    expect(wrapper.find(MyButton).isEmpty()).toBeFalsy()
  });

  // attributes()：返回 Wrapper DOM 节点的特性对象。
  // classes()：返回 Wrapper DOM 节点的 class 组成的数组
  it('MyButton组件有my-class类', () => {
    expect(wrapper.find(MyButton).attributes().class).toContain('my-button');
    expect(wrapper.find(MyButton).classes()).toContain('my-button');
  });

  // hasStyle：判断是否有对应的内联样式
  it('MyButton组件有my-class类', () => {
    expect(wrapper.find(MyButton).hasStyle('padding-top', '10px')).toBeTruthy()
  });

  // ------------测试Props-------
  // props：返回 Wrapper vm 的 props 对象。
  it('接收到了bye作为Props', () => {
    expect(wrapper.props().messages).toContain('bye');
  });

  // vm.$options返回Vue实例的初始化选项
  describe('验证Props的各个属性', () => {
    wrapper = mount(Test1, {
      propsData: {
        messages: ['bye', 'bye', 'bye']
      }
    });

    const messages = wrapper.vm.$options.props.messages;

    it('messages is of type array', () => {
      expect(messages.type).toBe(Array)
    });

    it('messages is required', () => {
      expect(messages.required).toBeFalsy()
    });

    it('messages has at least length 2', () => {
      expect(messages.validator && messages.validator(['a'])).toBeFalsy();
      expect(messages.validator && messages.validator(['a', 'a'])).toBeTruthy();
    });

    wrapper.destroy()
  });

  // $emit 触发自定义事件
  describe('验证addCounter是否被触发', () => {
    wrapper = mount(Test1);
    it('addCounter Fn should be called', () => {
      const mockFn = jest.fn();
      wrapper.setMethods({'addCounter': mockFn});

      wrapper.find(MyButton).vm.$emit('add', 100);
      expect(mockFn).toHaveBeenCalledTimes(1);
    });
    wrapper.destroy()
  });
});
