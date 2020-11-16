<template>
  <div className="avatar">
    <img v-bind:src="url" v-bind="name" />
    <div>{{ name }}</div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
    url: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped></style>
