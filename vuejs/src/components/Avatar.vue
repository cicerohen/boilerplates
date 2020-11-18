<template>
  <div v-bind:class="style">
    <img v-bind:src="url" v-bind="name" />
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
    palette: {
      type: String,
      default: "initial",
    },
  },
  computed: {
    style: function () {
      return ["avatar", `${this.palette}`, `${this.size}`];
    },
  },
};
</script>

