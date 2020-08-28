<template>
  <v-navigation-drawer app temporary v-model="isVisible" v-on:input="$emit('input', isVisible)">
    <v-list-item id="btn-expenses">
      <v-list-item-content>Expenses</v-list-item-content>
    </v-list-item>
    <v-list-item id="btn-user">
      <v-list-item-content>User</v-list-item-content>
    </v-list-item>
    <v-list-item id="btn-settings">
      <v-list-item-content>Settings</v-list-item-content>
    </v-list-item>
  </v-navigation-drawer>
</template>

<script>
import Vue from "vue";

export default Vue.component("navigation", {
  props: {
    drawer: Boolean,
  },
  data: () => ({ isVisible: false }),
  watch: {
    drawer: function (newVal) {
      this.isVisible = newVal;
    },
  },
});
</script>

<style>
</style>
