<template>
  <div class="align-center mb-6 mt-6">
    <v-container id="about-container">
      <v-card class="pa-3" max-height="500px">
        <GithubLink />
      </v-card>
    </v-container>
  </div>
</template>

<script>
import GithubLink from '@/components/about/github-link';

export default {
  name: 'AboutPage',
  components: {
    GithubLink,
  },
};
</script>

<style scoped>
#about-container {
  max-width: 60%;
  min-width: 400px;
}
</style>
