import Vue from 'vue'
import Vuex from 'vuex'
import Transaction from '../components/transaction/Transaction'
import { generateRandomNo } from './storageUtil'
import { TRANSACTION_CREATE } from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    transactions: [
      new Transaction(generateRandomNo(), "Rewe", "Beer", Date(), "Groceries", 12.99, true),
      new Transaction(generateRandomNo(), "Cinema", "Nils ticket", Date(), "Entertainment", 8.50, false),
      new Transaction(generateRandomNo(), "ADH", "Beer", Date(), "Insurance", 9.99, true)
    ]
  },
  mutations: {
    [TRANSACTION_CREATE] (state, transaction) { 
      transaction.id = generateRandomNo()
      state.transactions.push(transaction)
    }
  },
  actions: {
  },
  modules: {
  }
})
