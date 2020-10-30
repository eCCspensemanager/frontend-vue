import Category from '@/components/category/category';
import Transaction from '@/components/transaction/transaction';
import { AppState } from '.';
import { TRANSACTION_CREATE, TRANSACTION_DELETE, TRANSACTION_UPDATE } from './mutation-types';
import { generateRandomNo } from './storage-util';

export const mutations = {
  [TRANSACTION_CREATE](state: AppState, transaction: Transaction) {
    transaction.id = generateRandomNo();
    state.transactions.push(transaction);
  },
  [TRANSACTION_UPDATE](state: AppState, updatedItem: Transaction) {
    var transaction = state.transactions.find((element) => element.id == updatedItem.id);
    if (transaction != null) {
      Object.assign(transaction, updatedItem);
    }
  },
  [TRANSACTION_DELETE](state: AppState, transaction: Transaction) {
    var index = state.transactions.indexOf(transaction);
    state.transactions.splice(index, 1);
  },
};
