import { mount, createLocalVue } from '@vue/test-utils'
import Navigation from '@/components/navigation.vue'
import Vuetify from 'vuetify'

const localVue = createLocalVue()

describe('Navigation.vue', () => {
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it('contains 3 items', () => {
    const wrapper = mount(Navigation, {
      localVue,
      vuetify,
      propsData: { drawer: false }
    })

    expect(wrapper.find("#btn-expenses").exists()).toBe(true);
    expect(wrapper.find("#btn-user").exists()).toBe(true);
    expect(wrapper.find("#btn-settings").exists()).toBe(true);
  })
})
