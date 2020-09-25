import { defaultTransaction } from '@/components/transaction/transaction';
import { TRANSACTION_CREATE } from '@/store/mutation-types';
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
});
