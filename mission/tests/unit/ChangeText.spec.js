import { shallowMount } from '@vue/test-utils';
import ChangeText from '@/components/ChangeText.vue';

describe('ChangeText.vue', () => {
    it('버튼 클릭 시에 문자열 회전(1회 클릭)', () => {
        const propsmessage = 'like lion';
        const wrapper = shallowMount(ChangeText, {
            props: { propsmessage },
        });
        const button = wrapper.find('button');
        button.trigger('click');
        expect(wrapper.vm.message).toMatch('ike lionl')
      }),
      it('버튼 클릭 시에 문자열 회전(3회 클릭)', () => {
        const propsmessage = 'like lion';
        const wrapper = shallowMount(ChangeText, {
            props: { propsmessage },
        });
        const button = wrapper.find('button');
        button.trigger('click');
        button.trigger('click');
        button.trigger('click');
        expect(wrapper.vm.message).toMatch('e lionlik')
      })
});