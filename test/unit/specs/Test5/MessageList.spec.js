/**
 * Created by zh on 2018/5/13.
 */
import { mount } from 'vue-test-utils';
import MessageList from '@/components/Test5/MessageList';
import Message from '@/components/Test5/Message';

describe('Test for MessageList of Test5 Component', () => {
  let wrapper;

  afterEach(() => {
    wrapper.destroy()
  });

  // 渲染命名插槽的默认内容
  it('Header slot renders a default header text', () => {
    wrapper = mount(MessageList);
    const header = wrapper.find('.list-header');
    expect(header.text()).toBe('This is a default header')
  });

  // 向header插槽中插入内容
  it('Header slot is rendered withing .list-header', () => {
    wrapper = mount(MessageList, {
      slots: {
        header: '<header>What an awesome header</header>'
      }
    });

    const header = wrapper.find('.list-header');
    expect(header.text()).toBe('What an awesome header')
  })
});
