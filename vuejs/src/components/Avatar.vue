<template>
  <div v-bind:class="style">
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
    size: {
      type: String,
      default: "small",
    },
  },
  computed: {
    style: function () {
      return ["avatar", `${this.size}`];
    },
  },
};
</script>

