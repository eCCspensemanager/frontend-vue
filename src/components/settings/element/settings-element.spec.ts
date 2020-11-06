import { mount } from '@vue/test-utils';
import GithubLink from '@/components/about/github-link.vue';
import SettingsElement from '@/components/settings/element/settings-element.vue';
import { baseVue } from '@/tests/setup';

describe('settings-element', () => {
  const { base } = baseVue({
    slots: {
      default: GithubLink,
    },
  });
  const settingsElement = mount(SettingsElement, base);

  it('renders the heading', async () => {
    await settingsElement.setProps({ heading: 'Some random heading' });

    const heading = settingsElement.find('.settings-element-heading');
    expect(heading.text()).toEqual('Some random heading');
  });

  it('renders the slot in a card', () => {
    const card = settingsElement.find('.v-card');

    expect(card.findAllComponents(GithubLink).length).toBe(1);
  });
});
