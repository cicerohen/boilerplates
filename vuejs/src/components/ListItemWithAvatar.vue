<template>
  <ListItem class="list-item-with-avatar">
    <Avatar slot="left" v-bind:url="avatarUrl" />
    <slot name="left" slot="left" />
    <slot name="right" slot="right" />
  </ListItem>
</template>

<script>
import Avatar from "./Avatar";
import ListItem from "./ListItem";
export default {
  props: {
    avatarUrl: {
      type: String,
      default: "",
    },
  },
  components: {
    Avatar,
    ListItem,
  },
};
</script>
