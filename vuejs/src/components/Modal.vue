<template>
  <transition name="modal">
    <div
      class="modal-backdrop"
      v-on="{ click: (closeOnClickBackdrop && close) || null }"
    >
      <section class="modal">
        <header class="modal-header">
          <div class="modal-header-left-area">
            <Title>{{ title }}</Title>
          </div>
          <div class="modal-header-right-area" v-on:click="close">
            <Button class="modal-close-button"> close</Button>
          </div>
        </header>
        <main class="modal-body">
          <slot />
        </main>
      </section>
    </div>
  </transition>
</template>

<script>
import Button from "./Button";
import Title from "./Title";

export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    closeOnClickBackdrop: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    Title,
    Button,
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>
