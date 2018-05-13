/**
 * Created by zh on 2018/5/13.
 */
import { mount } from 'vue-test-utils';
import MessageList from '@/components/Test4/MessageList';
import Message from '@/components/Test4/Message';

describe('Test for MessageList of Test4 Component', () => {
  let wrapper;

  beforeEach(() => {
    // 伪造div
    // wrapper = mount(MessageList, {
    //   slots: {
    //     default: '<div class="fake-msg"></div>'
    //   }
    // });

    // 行不通
    // const fakeMessage = mount(Message, {
    //   propsData: {
    //     message: 'test'
    //   }
    // });

    // 行得通
    const fakeMessage = {
      render(h) {
        return h(Message, { props: { message: 'test' } })
      }
    };
    wrapper = mount(MessageList, {
      slots: {
        default: fakeMessage
      }
    })
  });

  afterEach(() => {
    wrapper.destroy()
  });

  //  组件中应该通过slots插入了div.fake-msg
  // it('div.fake-msg are inserted in a ul.list-messages element', () => {
  //   const list = wrapper.find('ul.list-messages').find('li');
  //   expect(list.contains('li')).toBeTruthy()
  // });

  //  组件中应该通过slots插入了Message，并且传入的文本是test
  it('Messages are inserted in a ul.list-messages element', () => {
    const list = wrapper.find('ul.list-messages').find('li');
    expect(wrapper.find(Message).isVueInstance()).toBeTruthy();
    expect(list.contains('li')).toBeTruthy();
    expect(list.find('li').text()).toBe('test')
  })
});
