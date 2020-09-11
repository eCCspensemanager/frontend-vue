import { mount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import TransactionTable from '@/components/transaction/transaction-table.vue';
import Vuex from 'vuex';
import Transaction from '../../../../src/components/transaction/transaction';

describe('transaction-table.vue', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const vuetify = new Vuetify();

  const store = new Vuex.Store({
    state: {
      transactions: [
        new Transaction('id1', 'Rewe', 'Nachos', Date(), 'Groceries', 2.99, true),
        new Transaction('id2', 'cc', 'Income', Date(), 'Groceries', 13.99, false),
      ],
    },
  });

  const table = mount(TransactionTable, { localVue, vuetify, store });

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
});
