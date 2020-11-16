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
  },
  computed: {
    style: function () {
      return ["button", `${this.size}`];
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../scss/components/_button.scss";
.button {
  @include button-style;
}
</style>
