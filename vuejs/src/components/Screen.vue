<template>
  <div class="screen">
    <Header />
    <Container>
      <slot />
    </Container>
  </div>
</template>

<script>
import Container from "./Container";
import Header from "./Header.vue";

export default {
  components: {
    Header,
    Container,
  },
};
</script>

<style lang="scss" scoped>
.screen {
}
</style>
