<template>
  <Screen>
    <CharactersList
      v-bind:characters="characters"
      v-bind:showLoading="isLoadingCharacters"
      v-on:details="openModal"
    />
    <CharacterDetailsModal
      title="Details"
      v-show="modalIsOpen"
      v-on:close="closeModal"
    />
  </Screen>
</template>

<script>
import CharacterDetailsModal from "../../components/CharacterDetailsModal";
import Screen from "../../components/Screen";
import CharactersList from "../../components/CharactersList";
import fetchApi from "../../services/api";

export default {
  data: function() {
    return {
      characters: [],
      isLoadingCharacters: true,
      modalIsOpen: false,
    };
  },
  components: {
    CharacterDetailsModal,
    Screen,
    CharactersList,
  },
  methods: {
    openModal() {
      this.modalIsOpen = true;
    },
    closeModal() {
      this.modalIsOpen = false;
    },
    async fetchCharacters() {
      this.isLoadingCharacters = true;
      const { data } = await fetchApi("/public/characters");
      if (data?.results) {
        this.characters = data.results;
      }
      this.isLoadingCharacters = false;
    },
  },
  created() {
    console.log(this);
  },
  mounted() {
    this.fetchCharacters();
  },
};
</script>
