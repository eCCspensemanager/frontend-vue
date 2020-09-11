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
      propsData: { shouldShowDrawer: false },
    });
  });

  it('shows drawer based on property', async () => {
    await wrapper.setProps({ shouldShowDrawer: true });
    const visibleStyle = wrapper.attributes('style');

    await wrapper.setProps({ shouldShowDrawer: false });
    const invisibleStyle = wrapper.attributes('style');
    expect(visibleStyle).not.toBe(invisibleStyle);
  });

  it('contains 3 menu items', () => {
    const expensesBtn = wrapper.find('#btn-expenses');
    expect(expensesBtn.text()).toBe('Transactions');

    const settingsBtn = wrapper.find('#btn-settings');
    expect(settingsBtn.text()).toBe('Settings');

    const aboutBtn = wrapper.find('#btn-about');
    expect(aboutBtn.text()).toBe('About');
  });
});
