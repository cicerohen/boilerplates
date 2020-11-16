<template>
  <section class="characters-list">
    <Title>Marvel Characters</Title>
    <div class="characters-list-wrapper">
      <Loader class="characters-list-loader" v-show="showLoading" />
      <List>
        <ListItem v-for="character in characters" v-bind:key="character.id">
          <div>{{ character.name }}</div>
          <div>
            <Button v-on:click.native="favorite(character)">Favorite</Button>
            <Button v-on:click.native="showDetails(character)"
              >Show details</Button
            >
          </div>
        </ListItem>
      </List>
    </div>
  </section>
</template>

<script>
import Button from "./Button";
import Loader from "./Loader";
import Title from "./Title";
import List from "./List.vue";
import ListItem from "./ListItem.vue";

export default {
  components: {
    List,
    ListItem,
    Title,
    Loader,
    Button,
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
  methods: {
    showDetails(character) {
      this.$emit("details", { character });
    },
    favorite(character) {
      this.$emit("favorite", { character });
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
