<template>
  <div v-bind:class="classes">
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
    classes: function () {
      return ["avatar", `${this.palette}`, `${this.size}`];
    },
  },
};
</script>

