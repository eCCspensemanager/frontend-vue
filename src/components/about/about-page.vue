<template>
  <div class="mb-6 mt-6">
    <v-card class="pa-3" max-height="500px">
      <GithubLink />
    </v-card>
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
