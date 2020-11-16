<template>
  <Modal
    title="Character Details"
    class="character-details-modal"
    v-on="$listeners"
  >
    <Avatar url="" />
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
};
</script>

<style scoped></style>
