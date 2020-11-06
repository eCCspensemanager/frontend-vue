<template>
  <div>
    <p class="settings-element-heading">{{ heading }}</p>
    <v-card max-height="500px">
      <slot />
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'SettingElement',
  props: {
    heading: { type: String, default: 'set me' },
  },
};
</script>
