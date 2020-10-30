import Transaction from '@/components/transaction/store/transaction';
import { generateRandomNo } from '@/store/storage-util';

export const TRANSACTION_CREATE = 'TRANSACTION:CREATE';
export const TRANSACTION_UPDATE = 'TRANSACTION:UPDATE';
export const TRANSACTION_DELETE = 'TRANSACTION:DELETE';

export interface TransactionState {
  transactions: Transaction[];
}

export const transactionGetters = {
  // TODO add getter and use in TransactionTable
};

export const transactionMutations = {
  [TRANSACTION_CREATE](state: TransactionState, transaction: Transaction) {
    transaction.id = generateRandomNo();
    state.transactions.push(transaction);
  },
  [TRANSACTION_UPDATE](state: TransactionState, updatedItem: Transaction) {
    var transaction = state.transactions.find((element) => element.id == updatedItem.id);
    if (transaction != null) {
      Object.assign(transaction, updatedItem);
    }
  },
  [TRANSACTION_DELETE](state: TransactionState, transaction: Transaction) {
    var index = state.transactions.indexOf(transaction);
    state.transactions.splice(index, 1);
  },
};

export const transactionStore = {
  state: { transactions: [] },
  getters: transactionGetters,
  mutations: transactionMutations,
};
