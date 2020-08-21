<template>
  <v-app class="mx-auto">
    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Title</v-toolbar-title>
    </v-app-bar>
    <navigation v-bind:drawer="drawer" v-on:input="drawer = $event" />
    <v-main>
      <transaction-table :headers="headers" :transactions="consumables" />
    </v-main>
  </v-app>
</template>

<script>
import TransactionTable from "./components/transaction-table.vue";
import Navigation from "./components/navigation.vue";

export default {
  name: "App",

  components: {
    TransactionTable,
    Navigation,
  },

  data: () => ({
    drawer: false,
    headers: [
      {
        text: "Type",
        align: "start",
        sortable: false,
        value: "name",
      },
      {
        text: "Count",
        align: "start",
        sortable: false,
        value: "count",
      },
    ],
    consumables: [
      {
        name: "Beer",
        count: 20,
      },
      {
        name: "Coke",
        count: 2,
      },
    ],
  }),
};
</script>
