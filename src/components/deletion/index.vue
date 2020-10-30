<template>
  <v-dialog id="deletion-confirmation" v-model="visible" persistent max-width="500px" @keydown.esc="close">
    <v-card>
      <v-card-title>
        <span id="deletion-confirmation-title" class="headline">Deletion confirmation</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          Do you want to delete <b>{{ deletionData.deletionName }}</b> ?
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn id="btn-deletion-confirmation-cancel" text @click="close">Cancel</v-btn>
        <v-btn id="btn-deletion-confirmation-confirm" color="red" text @click="confirm">Delete</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import DeletionConfirmationData from '@/components/deletion/data/deletion-confirmation-data';

export default {
  name: 'DeletionConfirmation',

  props: {
    deletionData: { type: DeletionConfirmationData, default: new DeletionConfirmationData() },
  },

  data: () => ({
    visible: false,
  }),

  watch: {
    deletionData: {
      deep: true,
      handler: function (newData) {
        this.visible = newData.showConfirmation;
      },
    },
  },

  methods: {
    close() {
      this.visible = false;
      this.$emit('close-event', this.visible);
    },

    confirm() {
      this.deletionData.action();
      this.close();
    },
  },
};
</script>
