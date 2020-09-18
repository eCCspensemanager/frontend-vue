import { defaultTransaction } from '@/components/transaction/transaction';
import { TRANSACTION_CREATE, TRANSACTION_DELETE } from '@/store/mutation-types';
import { mutations } from '@/store/mutations';

describe('mutations', () => {
  it('TRANSACTION_CREATE', () => {
    const state = { transactions: [] };

    const newTransaction = defaultTransaction();
    expect(newTransaction.id).toBeNull();

    mutations[TRANSACTION_CREATE](state, newTransaction);

    expect(newTransaction.id).not.toBeNull();
    expect(state.transactions.length).toBe(1);
    expect(state.transactions[0]).toEqual(newTransaction);
  });

  it('TRANSACTION_DELETE', () => {
    const state = {
      transactions: [defaultTransaction(), defaultTransaction(), defaultTransaction()],
    };

    let transactionToDelete = state.transactions[1];
    mutations[TRANSACTION_DELETE](state, transactionToDelete);

    expect(state.transactions.indexOf(transactionToDelete)).toBe(-1);
  });
});
