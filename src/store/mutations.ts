import Transaction from '@/components/transaction/transaction';
import { AppState } from '.';
import { TRANSACTION_CREATE } from './mutation-types';
import { generateRandomNo } from './storage-util';

export const mutations = {
  [TRANSACTION_CREATE](state: AppState, transaction: Transaction) {
    transaction.id = generateRandomNo();
    state.transactions.push(transaction);
  },
};
