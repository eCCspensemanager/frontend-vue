import { mount, Wrapper } from '@vue/test-utils';
import TransactionDialog from '@/components/transaction/dialog/transaction-dialog.vue';
import Transaction, { defaultTransaction } from '@/components/transaction/store/transaction';
import Category from '@/components/category/store/category';
import { baseVue } from '@/tests/setup';

describe('transaction-dialog.vue', () => {
  const transaction = new Transaction('someId', 'somePayee', 'someMemo', new Date(), new Category('someCategory'), 13.37, true);

  it('renders based on the "isVisible" property', async () => {
    const dialog = mountDialog(transaction, false);

    await dialog.setProps({ isVisible: false });
    expect(dialog.find('#dialog-transaction').text()).toBe('');

    await dialog.setProps({ isVisible: true });
    expect(dialog.find('#dialog-transaction').text()).not.toBe('');
  });

  it('renders create dialog', () => {
    const dialog = mountDialog(defaultTransaction(), true);

    expect(dialog.find('#dialog-transaction-title').text()).toBe('New Transaction');
    expect(dialog.find('#btn-transaction-dialog-submit').text()).toBe('Create');
  });

  it('renders edit dialog', () => {
    const dialog = mountDialog(transaction, true);

    expect(dialog.find('#dialog-transaction-title').text()).toBe('Edit Transaction');
    expect(dialog.find('#btn-transaction-dialog-submit').text()).toBe('Update');
  });

  it('emits close event if close button is clicked', async () => {
    const dialog: Wrapper<any> = mountDialog(transaction, true);

    const closeBtn = dialog.find('#btn-transaction-dialog-close');
    await closeBtn.trigger('click');

    // One 'dialog-closed' with value 'false' should've been emitted
    let events = dialog.emitted()['dialog-closed']!;
    expect(events.length).toBe(1);
    expect(events[0]).toEqual([false]);
  });

  function mountDialog(transaction: Transaction, shouldRender: boolean): Wrapper<any> {
    const options = {
      data: () => (shouldRender ? { visible: true } : {}),
      propsData: { item: transaction },
    };

    return mount(TransactionDialog, baseVue({ options: options }));
  }
});
