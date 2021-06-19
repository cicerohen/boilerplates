<template>
  <button v-bind:class="classes"><slot /></button>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: "small",
    },
    palette: {
      type: String,
      default: "primary",
    },
    variant: {
      type: String,
      default: "hollow",
    },
  },
  computed: {
    classes: function () {
      return ["button", `${this.variant}`, `${this.size}`, `${this.palette}`];
    },
  },
};
</script>

