import { mount, createLocalVue } from '@vue/test-utils';
import TransactionTable from '@/components/transaction/transaction-table.vue';
import Category from '@/components/category/category';
import Transaction from '@/components/transaction/transaction';
import { baseVue } from '@/tests/setup';

describe('transaction-table.vue', () => {
  const vue = baseVue({
    transactions: [
      new Transaction('id1', 'Rewe', 'Nachos', new Date(), new Category('Groceries'), 2.99, true),
      new Transaction('id2', 'cc', 'Income', new Date(), new Category('Groceries'), 13.99, false),
    ],
  });
  const table = mount(TransactionTable, vue);

  it('renders column headers correctly', () => {
    let columnHeaders = table.findAll('.v-data-table-header th');

    expect(columnHeaders.length).toEqual(6);
    expect(columnHeaders.at(0).text()).toEqual('Payee');
    expect(columnHeaders.at(1).text()).toEqual('Memo');
    expect(columnHeaders.at(2).text()).toEqual('Date');
    expect(columnHeaders.at(3).text()).toEqual('Category');
    expect(columnHeaders.at(4).text()).toEqual('Amount');
    expect(columnHeaders.at(5).text()).toEqual('Actions');
  });

  it('renders create button in table toolbar', () => {
    let createBtn = table.find('.v-toolbar #btn-create-transaction');

    expect(createBtn.text()).toEqual('New Transaction');
  });

  it('renders transaction rows correctly', () => {
    let bodyRows = table.findAll('tbody > tr');

    expect(bodyRows.length).toEqual(2);
    expect(bodyRows.at(0).text()).toContain('Rewe');
    expect(bodyRows.at(1).text()).toContain('cc');
  });

  it('renders outflow cell in colors', () => {
    let amountCells = table.findAll('tbody td > .amount-cell');
    let outflowCell = amountCells.at(0);
    let inflowCell = amountCells.at(1);

    expect(outflowCell.classes('red--text')).toBeTruthy();
    expect(inflowCell.classes('green--text')).toBeTruthy();
  });

  it('opens edit dialog with row item data', async () => {
    // Dialog is not rendered by default
    const editDialog = table.find('#dialog-transaction');
    expect(editDialog.text()).toBe('');

    const firstItemEditBtn = table.findAll('.mdi-pencil').at(0);
    await firstItemEditBtn.trigger('click');

    // Edit button opens dialog and passes item data
    expect(editDialog.text()).not.toBe('');
    expect(editDialog.props('item').payee).toBe(vue.store.state.transactions[0].payee);
  });
});
