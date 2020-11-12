<template>
  <li class="list-item">
    <slot />
  </li>
</template>

<script>
export default {
  name: "ListItem",
};
</script>

<style scoped>
.list-item {
  border-left-width: 0;
  border-top-width: 1px;
  border-right-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  border-color: #ccc;
  list-style: none;
  margin-top: -1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
}
</style>
