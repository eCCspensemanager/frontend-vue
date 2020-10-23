import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import store from './store';
import router from './router';
import { CATEGORY_CREATE, TRANSACTION_CREATE } from './store/mutation-types';
import Transaction from './components/transaction/transaction';
import { generateRandomNo } from './store/storage-util';
import Category from './components/category/category';

Vue.config.productionTip = false;

new Vue({
  vuetify,
  store,
  router,
  created() {
    this.$store.commit(CATEGORY_CREATE, new Category('Entertainment'));
    this.$store.commit(CATEGORY_CREATE, new Category('Groceries'));

    this.$store.commit(
      TRANSACTION_CREATE,
      new Transaction(generateRandomNo(), 'Rewe', 'Beer', new Date(), this.$store.getters.getCategoryByName('Groceries'), 12.99, true),
    );
    this.$store.commit(
      TRANSACTION_CREATE,
      new Transaction(generateRandomNo(), 'Cinema', 'Nils ticket', new Date(), this.$store.getters.getCategoryByName('Entertainment'), 8.5, false),
    );
    this.$store.commit(
      TRANSACTION_CREATE,
      new Transaction(generateRandomNo(), 'ADH', 'Beer', new Date(), this.$store.getters.getCategoryByName('Groceries'), 9.99, true),
    );
  },
  render: (h) => h(App),
}).$mount('#app');
