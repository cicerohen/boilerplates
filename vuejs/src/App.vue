<template>
  <div id="app">
    <HomeScreenContainer />
  </div>
</template>

<script>
import HomeScreenContainer from "./containers/screens/HomeScreenContainer.vue";

export default {
  name: "App",
  components: {
    HomeScreenContainer,
  },
};
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
}
</style>
