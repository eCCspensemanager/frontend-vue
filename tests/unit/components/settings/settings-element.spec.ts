import Vuetify from 'vuetify';
import { createLocalVue, mount } from "@vue/test-utils";
import Vuex from 'vuex';
import Category from '@/components/category/category';
import SettingsElement from '@/components/settings/settings-element.vue';

describe('settings-element', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)

  const vuetify = new Vuetify()
  const store = new Vuex.Store({ state: { categories: [new Category("One"), new Category("Two")] } })

  it('should render heading', () => {
    const element = mount(SettingsElement, {localVue, vuetify, store})

  })
})
