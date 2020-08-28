<template>
  <v-navigation-drawer
    app
    temporary
    v-model="showDrawer"
    v-on:input="$emit('navigation-closed', showDrawer)"
  >
    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.id" link :id="item.id">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import Vue from "vue";

export default Vue.component("navigation", {
  props: {
    shouldShowDrawer: Boolean,
  },
  data: () => ({
    showDrawer: false,
    items: [
      { id: "btn-expenses", title: "Transactions", icon: "mdi-cash" },
      { id: "btn-settings", title: "Settings", icon: "mdi-cog" },
      { id: "btn-about", title: "About", icon: "mdi-help-box" },
    ],
  }),
  watch: {
    shouldShowDrawer: function (newVal) {
      this.showDrawer = newVal;
    },
  },
});
</script>

<style>
</style>
