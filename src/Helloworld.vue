<template>
  <div>helloworld {{ num }}</div>
  <input
    :type="inputType"
    v-model="num"
    @keypress.enter="
      () => {
        console.log('enter pressed')
      }
    "
    @focus="onFocus"
    @blur="onBlur"
  />
  <div>{{ arr }}</div>
  <div>{{ obj }}</div>
  <div>computed: {{ fullName }}</div>
  <div>
    v-if:
    <span v-if="number > 10">1</span>
    <span v-else-if="number < 10">-1</span>
    <span v-else>0</span>
  </div>
  <div v-for="item in 5">{{ item }}</div>
  <div v-for="(item, index) in 5">{{ item }} - {{ index }}</div>
  <div v-for="(item, index) in arr">{{ item }} - {{ index }}</div>
  <div><button type="button" @click="onClick()">good</button></div>
  <MyComponent v-for="item in 3" :num="item" />
</template>

<script setup lang="ts">
import { computed, reactive, ref, watch } from "vue"
import MyComponent from "./MyComponent.vue"

const num = ref("haha")
num.value = "cc"
const arr = reactive<number[]>([])
arr.push(1)
arr.push(23)
arr.push(5657)
const obj = reactive<Record<string, string>>({})
obj.a = "A"
obj.firstName = "Jac"
obj.lastName = "Wang"
const fullName = computed(() => `${obj.firstName} ${obj.lastName}`)
// watch(num, function () {
//   console.log(num.value)
// })

// if (true) {}
const number = ref(10)

const onClick = () => {
  console.log("onClick")
  inputType.value = inputType.value === "text" ? "password" : "text"
}
const onFocus = () => {
  console.log("onFocus")
}
const onBlur = () => {
  console.log("onBlur")
}
const inputType = ref("text")
</script>
