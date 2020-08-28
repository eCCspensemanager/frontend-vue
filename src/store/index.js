import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    transactions: [
      {
        name: "Beer",
        count: 20,
      },
      {
        name: "Coke",
        count: 2,
      },
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
