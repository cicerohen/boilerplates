<template>
  <h1 v-bind:class="style"><slot /></h1>
</template>
<script>
export default {
  props: {
    size: {
      type: String,
      default: "one",
    },
    palette: {
      type: String,
      default: "primary",
    },
  },
  computed: {
    style: function () {
      return ["title", `${this.size}`, `${this.palette}`];
    },
  },
};
</script>
