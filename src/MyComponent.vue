<template>
  <div @click="emits('click', props.num + 1)">My component {{ props.num }}</div>
</template>

<script setup lang="ts">
const props = defineProps<{ num: number }>()
const emits = defineEmits<{ (e: "click", num: number): void }>()
</script>
