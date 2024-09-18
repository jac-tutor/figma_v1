<template>
  <div>My component {{ props.num }}</div>
</template>

<script setup lang="ts">
const props = defineProps<{ num: number }>()
</script>
