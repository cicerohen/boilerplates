<template>
  <ListItemWithAvatar v-bind:avatarUrl="avatarUrl" class="characters-list-item">
    <div>
      <Button>Favorite</Button>
      <Button>Show details</Button>
    </div>
  </ListItemWithAvatar>
</template>
<script>
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
};
</script>

