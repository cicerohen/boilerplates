<template>
  <ul class="list">
    <slot />
  </ul>
</template>

<script>
export default {
  name: "List",
};
</script>

<style scoped>
.list {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
