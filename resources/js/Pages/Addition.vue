<template>
  <div class="flex justify-center">
    <div class="min-w-max pt-5">
      <h1 class="text-green-900 text-4xl text-center">Додавання</h1>
      <AddTask v-for="item in state.aArr" :a="item.a" :b="item.b" class="text-2xl rounded-lg"></AddTask>
      <PrimaryButton @click="newTasks" class="text-2xl bg-blue-900">Нові приклади</PrimaryButton>
    </div>
  </div>
</template>

<script setup>
import AddTask from '../CustomComponent/AddTask.vue';
import PrimaryButton from '../Components/PrimaryButton.vue';
import {reactive} from "vue";

const state = reactive({aArr: []});

newTasks();

function newTasks() {
  state.aArr.length = 0;
  for (let i = 0; i < 10; i++) {
    let a = Math.floor(Math.random() * (90 - 10 + 1)) + 10;
    let b = Math.floor(Math.random() * (100 - a - 10 + 1)) + 10;

    state.aArr.push({a, b,});
  }
}

</script>
