import { mount, createLocalVue } from '@vue/test-utils';
import Navigation from '@/components/navigation.vue';
import Vuetify from 'vuetify';

describe('navigation.vue', () => {
  let localVue;
  let vuetify;
  let wrapper;

  beforeEach(() => {
    localVue = createLocalVue();
    vuetify = new Vuetify();
    wrapper = mount(Navigation, {
      localVue,
      vuetify,
      propsData: { drawer: false },
    });
  });

  it('contains 3 items', () => {
    expect(wrapper.find('#btn-expenses').exists()).toBe(true);
    expect(wrapper.find('#btn-settings').exists()).toBe(true);
    expect(wrapper.find('#btn-about').exists()).toBe(true);
  });
});
