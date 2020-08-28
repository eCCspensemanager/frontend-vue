import Vue from 'vue'
import Vuex from 'vuex'
import Transaction from '../components/transaction/Transaction'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    transactions: [
      // payee, memo, date, category, amount, outflow
      new Transaction("1", "Rewe", "Beer", Date(), "Groceries", 12.99, true),
      new Transaction("2", "Cinema", "Nils ticket", Date(), "Entertainment", 8.50, false),
      new Transaction("3", "ADH", "Beer", Date(), "Insurance", 9.99, true)
    ]
  },
  mutations: {
    addTransaction(state, transaction) { state.transactions.push(transaction) }
  },
  actions: {
  },
  modules: {
  }
})
