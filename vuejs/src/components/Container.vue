<template>
  <main class="container"><slot /></main>
</template>

<script>
export default {
  name: "Container",
};
</script>
<style lang="scss" scoped>
.container {
  max-width: 1020px;
  margin: 0 auto;
}
</style>
