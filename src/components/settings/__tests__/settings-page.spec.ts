import Vuetify from 'vuetify';
import { createLocalVue, mount } from "@vue/test-utils";
import Vuex from 'vuex';
import Category from '@/components/category/category';
import SettingsPage from '@/components/settings/settings-page.vue';

describe('settings-page', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)

  const vuetify = new Vuetify()
  const store = new Vuex.Store({ state: { categories: [new Category("One"), new Category("Two")] } })

  it('should do something', () => {
    const element = mount(SettingsPage, {localVue, vuetify, store})
  })
})
