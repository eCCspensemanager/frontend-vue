import { mount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import TransactionDialog from '@/components/transaction/transaction-dialog.vue';
import Transaction from '@/components/transaction/transaction';
import { TRANSACTION_CREATE } from '@/store/mutation-types';

const transaction = new Transaction('someId', 'somePayee', 'someMemo', '2019-02-02', 'someCategory', 13.37, true);

describe('transaction-dialog.vue', () => {
  let localVue;
  let vuetify;
  let wrapper;

  beforeEach(() => {
    localVue = createLocalVue();
    vuetify = new Vuetify();
    wrapper = mount(TransactionDialog, {
      localVue,
      vuetify,
      data: () => ({ visible: true }),
      propsData: { item: transaction },
    });
  });

  it('renders based on the "isVisible" property', async () => {
    const testWrapper = mount(TransactionDialog, {
      localVue,
      vuetify,
      propsData: { item: transaction },
    });

    await testWrapper.setProps({ isVisible: false });
    expect(testWrapper.find('#dialog-transaction').text()).toBe('');

    await testWrapper.setProps({ isVisible: true });
    expect(testWrapper.find('#dialog-transaction').text()).not.toBe('');
  });

  it('renders create dialog', () => {
    const createWrapper = mount(TransactionDialog, {
      localVue,
      vuetify,
      data: () => ({ visible: true }),
      propsData: { item: {} },
    });

    expect(createWrapper.find('#dialog-transaction-title').text()).toBe('New Transaction');
    expect(createWrapper.find('#btn-transaction-dialog-submit').text()).toBe('Create');
  });

  it('renders edit dialog', () => {
    expect(wrapper.find('#dialog-transaction-title').text()).toBe('Edit Transaction');
    expect(wrapper.find('#btn-transaction-dialog-submit').text()).toBe('Update');
  });

  it('emits close event if close button is clicked', async () => {
    const closeBtn = wrapper.find('#btn-transaction-dialog-close');
    await closeBtn.trigger('click');

    // One 'dialog-closed' with value 'false' should've been emitted
    expect(wrapper.emitted()['dialog-closed'].length).toBe(1);
    expect(wrapper.emitted()['dialog-closed'][0]).toEqual([false]);
  });
});
