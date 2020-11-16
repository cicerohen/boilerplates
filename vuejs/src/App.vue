<template>
  <div id="app">
    <HomeScreenContainer />
  </div>
</template>

<script>
import HomeScreenContainer from "./containers/screens/HomeScreenContainer.vue";

export default {
  components: {
    HomeScreenContainer,
  },
};
</script>

<style>
@font-face {
  font-family: "Ubuntu";
  src: local("Merienda"),
    url(./assets/fonts/Ubuntu/Ubuntu-Regular.ttf) format("truetype");
}
html {
  font-size: "62.5%";
}
body {
  font-family: "Ubuntu";
  padding: 0;
  margin: 0;
}
</style>
