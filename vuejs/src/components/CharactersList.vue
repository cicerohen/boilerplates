<template>
  <section class="characters-list">
    <Title>Marvel Characters</Title>
    <div class="characters-list-wrapper">
      <Loader class="characters-list-loader" v-if="showLoading" />
      <List>
        <CharactersListItem
          v-on="$listeners"
          v-for="character in characters"
          v-bind:key="character.id"
          v-bind:character="character"
        />
      </List>
    </div>
  </section>
</template>

<script>
import Loader from "./Loader";
import Title from "./Title";
import List from "./List.vue";
import CharactersListItem from "./CharactersListItem";

export default {
  components: {
    List,
    CharactersListItem,
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

