<template>
  <v-app class="mx-auto">
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="shouldShowDrawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ pageTitle }}</v-toolbar-title>
    </v-app-bar>
    <Navigation :should-show-drawer="shouldShowDrawer" @navigation-closed="shouldShowDrawer = $event" />
    <v-main>
      <v-container class="content-body">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navigation from '@/components/navigation/navigation.vue';

export default {
  name: 'App',

  components: {
    Navigation,
  },

  data: () => ({
    shouldShowDrawer: false,
  }),

  computed: {
    pageTitle() {
      return this.$route.name;
    },
  },
};
</script>

<style scoped>
.content-body {
  max-width: 70%;
  min-width: 400px;
}
</style>
