import { mount } from '@vue/test-utils';
import Category from '@/components/category/store/category';
import SettingsPage from '@/components/settings/page/settings-page.vue';
import { baseVue } from '@/tests/setup';

describe('settings-page', () => {
  it('should do something', () => {
    const { base } = baseVue();

    //     [new Category('One'), new Category('Two')];

    mount(SettingsPage, base);
  });
});
