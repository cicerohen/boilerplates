<template>
  <header class="header">
    <div class="heder-left-area">
      <Title class="header-title">VueJS boilerplate</Title>
    </div>
    <div class="heder-right-area"></div>
  </header>
</template>

<script>
import Title from "./Title";

export default {
  components: {
    Title,
  },
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

.header-title {
  color: #fff;
}
</style>
