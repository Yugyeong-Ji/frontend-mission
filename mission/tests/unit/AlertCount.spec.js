import { shallowMount } from '@vue/test-utils';
import AlertCount from '@/components/AlertCount.vue';

describe('ChangeText.vue', () => {
  it('버튼 클릭 시에 카운트 증가', () => {
    const cnt = 0;
    const wrapper = shallowMount(AlertCount, {
      props: { cnt },
    });
    const button = wrapper.find('button');
    button.trigger('click');
    expect(cnt).toBe(1);
  });
});
