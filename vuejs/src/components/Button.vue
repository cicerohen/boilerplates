<template>
  <button v-bind:class="style"><slot /></button>
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
      default: "initial",
    },
    variant: {
      type: String,
      default: "solid",
    },
  },
  computed: {
    style: function () {
      return ["button", `${this.variant}`, `${this.size}`, `${this.palette}`];
    },
  },
};
</script>

