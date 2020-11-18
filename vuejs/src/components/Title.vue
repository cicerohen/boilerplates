<template>
  <h1 v-bind:class="style"><slot /></h1>
</template>
<script>
export default {
  props: {
    size: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    style: function () {
      return ["title", `title-size-${this.size}`];
    },
  },
};
</script>
