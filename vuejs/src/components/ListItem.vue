<template>
  <li class="list-item">
    <div v-if="$slots.left"><slot name="left" /></div>
    <slot v-if="!$slots.left && !$slots.right" />
    <div v-if="$slots.left"><slot name="right" /></div>
  </li>
</template>

<script>
export default {};
</script>
