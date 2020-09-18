<template>
  <v-app class="mx-auto">
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="shouldShowDrawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>eCCspenseManager</v-toolbar-title>
    </v-app-bar>
    <Navigation :should-show-drawer="shouldShowDrawer" @navigation-closed="shouldShowDrawer = $event" />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navigation from './components/navigation.vue';

export default {
  name: 'App',

  components: {
    Navigation,
  },

  data: () => ({
    shouldShowDrawer: false,
  }),
};
</script>
