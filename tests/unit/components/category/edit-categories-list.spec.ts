import Vuetify from 'vuetify';
import { createLocalVue, mount } from "@vue/test-utils";
import Vuex from 'vuex';
import Category from '@/components/category/category';
import CategoryList from '@/components/category/category-list.vue';

describe('edit-categories-list', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)

  const vuetify = new Vuetify()
  const store = new Vuex.Store({ state: { categories: [new Category("One"), new Category("Two")] } })

  it('should do something', () => {
    const element = mount(CategoryList, {localVue, vuetify, store})
  })
})
