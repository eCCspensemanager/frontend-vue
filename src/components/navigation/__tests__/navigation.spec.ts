import { mount, createLocalVue, Wrapper } from '@vue/test-utils';
import Navigation from '@/components/navigation.vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import { EXPENSES_ROUTE, SETTINGS_ROUTE, ABOUT_ROUTE } from '@/router/routes';

describe('navigation.vue', () => {
  const router = new VueRouter();

  let localVue;
  let vuetify;
  let wrapper: Wrapper<any>;

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(VueRouter);
    vuetify = new Vuetify();
    wrapper = mount(Navigation, {
      localVue,
      vuetify,
      router,
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
    expect(expensesBtn.text()).toBe('Expenses');

    const settingsBtn = wrapper.find('#btn-settings');
    expect(settingsBtn.text()).toBe('Settings');

    const aboutBtn = wrapper.find('#btn-about');
    expect(aboutBtn.text()).toBe('About');
  });

  it('routes to expenses / home page', async () => {
    const expensesBtn = wrapper.find('#btn-expenses');
    await expensesBtn.trigger('click');

    expect(wrapper.vm.$route.path).toBe(EXPENSES_ROUTE);
  });

  it('routes to settings page', async () => {
    const settingsBtn = wrapper.find('#btn-settings');
    await settingsBtn.trigger('click');

    expect(wrapper.vm.$route.path).toBe(SETTINGS_ROUTE);
  });

  it('routes to about page', async () => {
    const aboutBtn = wrapper.find('#btn-about');
    await aboutBtn.trigger('click');

    expect(wrapper.vm.$route.path).toBe(ABOUT_ROUTE);
  });
});
