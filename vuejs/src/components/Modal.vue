<template>
  <transition name="modal">
    <div class="modal-backdrop">
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
        <footer></footer>
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
    onClose: {
      type: Function,
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
  created() {
    console.log("listener", typeof this.$listeners);
  },
};
</script>

<style lang="scss" scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}

.modal {
  background-color: #fff;
  max-width: 80%;
  border-radius: 5px;
  box-shadow: 0 1px 3px #000;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
}

.modal-body {
  padding: 15px;
}

.modal-close-button {
  cursor: pointer;
}
</style>
