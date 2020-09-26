import Transaction from '@/components/transaction/transaction';
import { AppState } from '.';
import { TRANSACTION_CREATE, TRANSACTION_DELETE } from './mutation-types';
import { generateRandomNo } from './storage-util';

export const mutations = {
  [TRANSACTION_CREATE](state: AppState, transaction: Transaction) {
    transaction.id = generateRandomNo();
    state.transactions.push(transaction);
  },
  [TRANSACTION_DELETE](state: AppState, transaction: Transaction) {
    var index = state.transactions.indexOf(transaction);
    state.transactions.splice(index, 1);
  },
};
