<template>
  <div class="p-6">
    <div>背乘數<input class="ml-2 border p-2" type="text" v-model.number="num1" /></div>
    <div class="mt-2">乘數<input class="ml-2 border p-2" type="text" v-model.number="num2" /></div>
    <table class="w-full">
      <tr v-for="y in mul1">
        <td class="border" v-for="x in mul2">
          <span v-if="y == 1">{{ x }}</span>
          <span v-else-if="x == 1">{{ y }}</span>
          <span v-else>{{ y }} * {{ x }} = {{ y * x }}</span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue"

const num1 = ref(0)
const num2 = ref(0)
const mul1 = computed(() =>
  Array(num1.value)
    .fill(0)
    .map((x, i) => i + 1)
)
const mul2 = computed(() =>
  Array(num2.value)
    .fill(0)
    .map((x, i) => i + 1)
)
</script>
