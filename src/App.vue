<template>
<v-app>
  <v-data-table
    :headers="headers"
    :items="consumables"
    class="elevation-1"
  ></v-data-table>
</v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
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
