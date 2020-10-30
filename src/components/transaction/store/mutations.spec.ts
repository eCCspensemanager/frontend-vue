import Category from '@/components/category/store/category';
import Transaction, { defaultTransaction } from '@/components/transaction/store/transaction';
import { TransactionState, TRANSACTION_CREATE, TRANSACTION_DELETE, TRANSACTION_UPDATE, transactionMutations } from '@/components/transaction/store';

describe('transactions', () => {
  describe('TRANSACTION_CREATE', () => {
    it('adds the transaction to the state', () => {
      const state = createState();
      const newTransaction = defaultTransaction();

      transactionMutations[TRANSACTION_CREATE](state, newTransaction);

      expect(state.transactions.length).toBe(1);
      expect(state.transactions[0]).toEqual(newTransaction);
    });

    it('generates transaction ID', () => {
      const state = createState();
      const newTransaction = defaultTransaction();
      expect(newTransaction.id).toBeNull();

      transactionMutations[TRANSACTION_CREATE](state, newTransaction);

      expect(newTransaction.id).not.toBeNull();
    });
  });

  describe('TRANSACTION_UPDATE', () => {
    it('updates based on transaction ID', () => {
      const originalItem = defaultTransaction();
      originalItem.id = 'someId';
      const defaultItem = defaultTransaction();
      const state = createState();
      state.transactions = [defaultItem, originalItem];

      const updatedItem = Object.assign({}, originalItem);
      updatedItem.id = 'someId';
      updatedItem.category = new Category('my category');
      transactionMutations[TRANSACTION_UPDATE](state, updatedItem);

      expect(state.transactions[0]).toEqual(defaultItem);
      expect(state.transactions[1]).toEqual(updatedItem);
    });

    it('can handle wrong transaction ID', () => {
      const initialTransaction = defaultTransaction();
      const state = createState();
      state.transactions = [initialTransaction];

      const updatedTransaction = new Transaction('someId', '', '', new Date(), null, 2.5, true);
      transactionMutations[TRANSACTION_UPDATE](state, updatedTransaction);

      expect(state.transactions[0]).toEqual(initialTransaction);
      expect(state.transactions.length).toBe(1);
    });
  });

  describe('TRANSACTION_DELETE', () => {
    it('removes transaction from state', () => {
      const state = createState();
      state.transactions = [defaultTransaction()];

      let transactionToDelete = state.transactions[1];
      transactionMutations[TRANSACTION_DELETE](state, transactionToDelete);

      expect(state.transactions.indexOf(transactionToDelete)).toBe(-1);
    });
  });
});

function createState(): TransactionState {
  return {
    transactions: [],
  };
}
