<template>
  <div class="m-4 p-4 w-[600px] border text-4xl">
    <div class="flex justify-center">
      <input type="text" class="rounded-l px-4 py-2 border border-black border-r-0" v-model="title" @keypress.enter="add" />
      <button type="button" class="rounded-r bg-blue-500 px-4 py-2 text-white" @click="add">Add</button>
    </div>
    <div class="mt-6">
      <table class="w-full">
        <tr>
          <th>Todo</th>
          <!-- <th>Finished</th> -->
        </tr>
        <tr>
          <td>
            <!-- <div class="text-center" @click="item.finished = true" v-for="item in todoList">
              {{ item.title }}
            </div> -->
            <div class="text-center" v-for="item in list">
              <del @click="item.finished = false" v-if="item.finished">{{ item.title }}</del>
              <span @click="item.finished = true" v-else>{{ item.title }}</span>
            </div>
          </td>
          <td>
            <!-- <div class="text-center" @click="item.finished = false" v-for="item in finishedList">
              {{ item.title }}
            </div> -->
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from "vue"

type Todo = {
  title: string
  finished: boolean
}

const title = ref("")
const list = reactive<Todo[]>([{ title: "洗碗", finished: false }])
const todoList = computed(() => list.filter((x) => x.finished === false))
const finishedList = computed(() => list.filter((x) => x.finished === true))

const add = () => {
  list.push({
    title: title.value,
    finished: false,
  })
  title.value = ""
}
</script>
