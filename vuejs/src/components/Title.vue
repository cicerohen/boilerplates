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
    style: function() {
      return ["title", `title-size-${this.size}`];
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  text-transform: uppercase;
  font-size: 0.8rem;
}

.title-size-1 {
  font-size: 0.8rem;
}
</style>
