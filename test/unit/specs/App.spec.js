/**
 * Created by zh on 2018/5/9.
 */
// 从测试实用工具集中导入 `mount()` 方法
import { shallow, mount } from 'vue-test-utils';
// 导入你要测试的组件
import App from '@/App';

describe('App.test.js', () => {
  let wrapper,
    vm;

  beforeEach(() => {
    // wrapper = mount(App);
    wrapper = shallow(App);
    vm = wrapper.vm;
    wrapper.setProps({
      messages: ['Cat']
    })
  });

  it('equals messages to ["Cat"]', () => {
    expect(vm.messages).toEqual(['Cat'])
  });

  // it('take a snapshot', () => {
  //   expect(vm.$el).toMatchSnapshot()
  // })
});
