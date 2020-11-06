import Vuetify from 'vuetify';
import { mount, Wrapper } from '@vue/test-utils';
import DeletionConfirmation from '@/components/deletion/index.vue';
import DeletionConfirmationData from '@/components/deletion/data/deletion-confirmation-data';
import { baseVue } from '@/tests/setup';

describe('deletion-confirmation', () => {
  it('renders based on the "showConfirmation" property', async () => {
    const { base } = baseVue({
      propsData: { deletionData: new DeletionConfirmationData() },
    });

    let confirmation: Wrapper<any> = mount(DeletionConfirmation, base);
    expect(confirmation.find('#deletion-confirmation').text()).toBe('');

    await confirmation.setProps({
      deletionData: new DeletionConfirmationData(true),
    });
    expect(confirmation.find('#deletion-confirmation').text()).not.toBe('');
  });
});
