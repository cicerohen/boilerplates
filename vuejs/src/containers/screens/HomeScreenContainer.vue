<template>
  <Screen>
    <CharactersList
      v-bind:characters="characters"
      v-bind:showLoading="isLoadingCharacters"
    />
  </Screen>
</template>

<script>
import Screen from "../../components/Screen";
import CharactersList from "../../components/CharactersList";
import fetchApi from "../../services/api";

export default {
  name: "HomeScreenContainer",
  data: function() {
    return {
      characters: [],
      isLoadingCharacters: true,
    };
  },
  components: {
    Screen,
    CharactersList,
  },
  methods: {
    async fetchCharacters() {
      this.isLoadingCharacters = true;
      const { data } = await fetchApi("/public/characters");
      if (data?.results) {
        this.characters = data.results;
      }
      this.isLoadingCharacters = false;
    },
  },
  mounted() {
    this.fetchCharacters();
  },
};
</script>
