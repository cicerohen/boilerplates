<template>
  <ListItemWithAvatar v-bind:avatarUrl="avatarUrl">
    <Title slot="left">{{ character.name }}</Title>
    <Button slot="right" v-on:click.native="favorite(character)"
      >Favorite</Button
    >
    <Button slot="right" v-on:click.native="showDetails(character)"
      >Show details</Button
    >
  </ListItemWithAvatar>
</template>
<script>
import Title from "./Title";
import Button from "./Button";
import ListItemWithAvatar from "./ListItemWithAvatar";

export default {
  props: {
    character: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    Title,
    Button,
    ListItemWithAvatar,
  },
  computed: {
    avatarUrl() {
      const { thumbnail } = this.character;
      if (thumbnail?.path && thumbnail?.extension) {
        return `${thumbnail?.path}.${thumbnail.extension}`;
      }
      return "";
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

