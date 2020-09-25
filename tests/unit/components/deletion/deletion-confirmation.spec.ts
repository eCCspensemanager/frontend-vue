import Vuetify from 'vuetify';
import { mount, createLocalVue, Wrapper } from '@vue/test-utils';
import DeletionConfirmation from '@/components/deletion/index.vue';
import DeletionConfirmationData from '@/components/deletion/deletion-confirmation-data';

describe('deletion-confirmation', () => {
  const localVue = createLocalVue();
  const vuetify = new Vuetify();

  it('renders based on the "showConfirmation" property', async () => {
    let confirmation: Wrapper<any> = mount(DeletionConfirmation, {
      localVue,
      vuetify,
      propsData: { deletionData: new DeletionConfirmationData() },
    });
    expect(confirmation.find('#deletion-confirmation').text()).toBe('');

    let shouldShowProps = new DeletionConfirmationData(true);
    await confirmation.setProps({ deletionData: shouldShowProps });
    expect(confirmation.find('#deletion-confirmation').text()).not.toBe('');
  });
});
