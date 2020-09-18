<template>
  <v-navigation-drawer v-model="showDrawer" temporary app @input="$emit('navigation-closed', showDrawer)">
    <v-list dense nav>
      <v-list-item v-for="item in items" :id="item.id" :key="item.id" link>
        <router-link :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </router-link>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import Vue from 'vue';

export default Vue.component('Navigation', {
  props: {
    shouldShowDrawer: Boolean,
  },
  data: () => ({
    showDrawer: false,
    items: [
      { id: 'btn-expenses', title: 'Transactions', icon: 'mdi-cash', to: '/' },
      { id: 'btn-settings', title: 'Settings', icon: 'mdi-cog', to: '/settings' },
      { id: 'btn-about', title: 'About', icon: 'mdi-help-box', to: '/about' },
    ],
  }),
  watch: {
    shouldShowDrawer: function (newVal) {
      this.showDrawer = newVal;
    },
  },
});
</script>

<style></style>
