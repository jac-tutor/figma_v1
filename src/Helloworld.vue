<template>
  <div>helloworld {{ num }}</div>
  <input type="text" v-model="num" />
  <div>{{ arr }}</div>
  <div>{{ obj }}</div>
  <div>{{ fullName }}</div>
</template>

<script setup lang="ts">
import { computed, reactive, ref, watch } from "vue"

const num = ref("haha")
num.value = "cc"
const arr = reactive<number[]>([])
arr.push(1)
arr.push(23)
arr.push(5657)
const obj = reactive<any>({})
obj.a = "A"
obj.firstName = "Jac"
obj.lastName = "Wang"
const fullName = computed(() => `${obj.firstName} ${obj.lastName}`)
watch(num, function () {
  console.log(num.value)
})
</script>
