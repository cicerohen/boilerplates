<template>
  <Modal
    title="Character Details"
    class="character-details-modal"
    v-on="$listeners"
  >
    <Avatar v-bind:url="avatarUrl" />
  </Modal>
</template>

<script>
import Modal from "./Modal";
import Avatar from "./Avatar";

export default {
  components: {
    Modal,
    Avatar,
  },
  props: {
    character: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    avatarUrl() {
      const { path, extension } = this.character.thumbnail || {};
      if (path && extension) {
        return `${path}.${extension}`;
      }
      return "";
    },
  },
};
</script>
