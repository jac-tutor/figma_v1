<template>
  <div>helloworld {{ 1 + 2 + num }}</div>
  <input type="text" v-model="num" />
  <div>{{ arr }}</div>
  <div>{{ obj }}</div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue"

const num = ref("haha")
num.value = "cc"
const arr = reactive<number[]>([])
arr.push(1)
arr.push(23)
arr.push(5657)
const obj = reactive<any>({})
obj.a = "A"
</script>
