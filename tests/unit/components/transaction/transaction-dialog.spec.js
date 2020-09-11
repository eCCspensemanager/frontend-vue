import { mount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import TransactionDialog from '@/components/transaction/transaction-dialog.vue';
import Transaction from '@/components/transaction/transaction';

describe('transaction-dialog.vue', () => {
  const transaction = new Transaction('someId', 'somePayee', 'someMemo', '2019-02-02', 'someCategory', 13.37, true);
  const localVue = createLocalVue();
  const vuetify = new Vuetify();

  it('renders based on the "isVisible" property', async () => {
    const dialog = mountDialog(transaction, false);

    await dialog.setProps({ isVisible: false });
    expect(dialog.find('#dialog-transaction').text()).toBe('');

    await dialog.setProps({ isVisible: true });
    expect(dialog.find('#dialog-transaction').text()).not.toBe('');
  });

  it('renders create dialog', () => {
    const dialog = mountDialog({}, true);

    expect(dialog.find('#dialog-transaction-title').text()).toBe('New Transaction');
    expect(dialog.find('#btn-transaction-dialog-submit').text()).toBe('Create');
  });

  it('renders edit dialog', () => {
    const dialog = mountDialog(transaction, true);

    expect(dialog.find('#dialog-transaction-title').text()).toBe('Edit Transaction');
    expect(dialog.find('#btn-transaction-dialog-submit').text()).toBe('Update');
  });

  it('emits close event if close button is clicked', async () => {
    const dialog = mountDialog(transaction, true);

    const closeBtn = dialog.find('#btn-transaction-dialog-close');
    await closeBtn.trigger('click');

    // One 'dialog-closed' with value 'false' should've been emitted
    expect(dialog.emitted()['dialog-closed'].length).toBe(1);
    expect(dialog.emitted()['dialog-closed'][0]).toEqual([false]);
  });

  function mountDialog(transaction, shouldRender) {
    // document.body.setAttribute('data-app', true);
    return mount(TransactionDialog, {
      localVue,
      vuetify,
      data: () => (shouldRender ? { visible: true } : {}),
      propsData: { item: transaction },
    });
  }
});
