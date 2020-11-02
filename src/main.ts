import Vue from 'vue';
import App from '@/App.vue';
import vuetify from '@/plugins/vuetify';
import store from '@/store';
import router from '@/router';
import { TRANSACTION_CREATE } from '@/components/transaction/store';
import Transaction from '@/components/transaction/store/transaction';
import { generateRandomNo } from '@/store/storage-util';
import { CATEGORY_CREATE } from './components/category/store';

Vue.config.productionTip = false;

new Vue({
  vuetify,
  store,
  router,
  created() {
    this.$store.commit(CATEGORY_CREATE, 'Entertainment');
    this.$store.commit(CATEGORY_CREATE, 'Groceries');
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
