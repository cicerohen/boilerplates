<template>
  <section class="characters-list">
    <Title>Characters</Title>
    <div class="characters-list-wrapper">
      <Loader class="characters-list-loader" v-if="showLoading" />
      <List>
        <ListItem v-for="character in characters" v-bind:key="character.id">
          {{ character.name }}
        </ListItem>
      </List>
    </div>
  </section>
</template>

<script>
import Loader from "./Loader";
import Title from "./Title";
import List from "./List.vue";
import ListItem from "./ListItem.vue";

export default {
  name: "CharactersList",
  components: {
    List,
    ListItem,
    Title,
    Loader,
  },
  props: {
    characters: {
      type: Array,
      default: () => [],
    },
    showLoading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.characters-list-wrapper {
}
.characters-list {
  position: relative;
}
.characters-list-loader {
}
</style>
