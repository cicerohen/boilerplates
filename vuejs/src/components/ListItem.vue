<template>
  <li class="list-item">
    <div class="list-item-left-area" v-if="$slots.left">
      <slot name="left" />
    </div>
    <slot v-if="!$slots.left && !$slots.right" />
    <div class="list-item-right-area" v-if="$slots.left">
      <slot name="right" />
    </div>
  </li>
</template>

<script>
export default {};
</script>
