<template>
  <div class="member mt-[30px] mr-[30px]">
    <img :src="props.avatar" alt="" srcset="" />
    <div class="mt-[20px]">{{ props.name }}</div>
    <div class="mt-[5px]">({{ props.desc }})</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ avatar: string; name: string; desc: string }>()
</script>
