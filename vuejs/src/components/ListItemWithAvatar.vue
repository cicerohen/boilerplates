<template>
  <ListItem>
    <Avatar slot="left" v-bind:url="avatarUrl" />
    <div slot="right" name="right">dsdsds</div>
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
