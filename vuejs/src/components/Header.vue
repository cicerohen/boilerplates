<template>
  <header class="header">
    <div class="heder__left-area">
      <h1>VueJS boilerplate</h1>
    </div>
    <div class="heder__right-area"></div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
.header {
  align-items: center;
  display: flex;
  justify-content: space-between;
  background-color: #e62429;
  padding: 15px;
  min-height: 80px;
}
</style>
