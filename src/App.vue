<template>
  <v-app class="mx-auto">
    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click="shouldShowDrawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>eCCspenseManager</v-toolbar-title>
    </v-app-bar>
    <navigation
      v-bind:shouldShowDrawer="shouldShowDrawer"
      v-on:navigation-closed="shouldShowDrawer = $event"
    />
    <v-main>
      <transaction-table />
    </v-main>
  </v-app>
</template>

<script>
import TransactionTable from "./components/transaction/transaction-table.vue";
import Navigation from "./components/navigation.vue";

export default {
  name: "App",

  components: {
    TransactionTable,
    Navigation,
  },

  data: () => ({
    shouldShowDrawer: false,
  }),
};
</script>
