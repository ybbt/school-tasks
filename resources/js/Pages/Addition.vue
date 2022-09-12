<template>
  <div class="flex justify-center">
    <div class="min-w-max pt-5">
      <h1 class="text-green-900 text-4xl text-center">Приклади</h1>
      <AddTask v-for="item in state.tasksArr" :task="item" class="text-2xl rounded-lg"></AddTask>
      <PrimaryButton @click="newTasks" class="text-xl bg-blue-900">Нові приклади</PrimaryButton>
    </div>
  </div>
</template>

<script setup>
import AddTask from '../CustomComponent/AddTask.vue';
import PrimaryButton from '../Components/PrimaryButton.vue';
import {reactive} from "vue";
import {arithmeticOperations} from '../enums';

const state = reactive({tasksArr: []});

newTasks();

function newTasks() {
  state.tasksArr.length = 0;
  for (let i = 0; i < 10; i++) {
    let operation = getRandomEnumValue(arithmeticOperations);

    switch (operation) {
      case arithmeticOperations.PLUS:
        state.tasksArr.push(addTask());
        break;
      case arithmeticOperations.MINUS:
        state.tasksArr.push(subTask());
        break;
    }
  }
}

function addTask() {
  let a = Math.floor(Math.random() * (90 - 10 + 1)) + 10;
  let b = Math.floor(Math.random() * (100 - a - 10 + 1)) + 10;
  return {a, b, operation: arithmeticOperations.PLUS};
}

function subTask() {
  let a = Math.floor(Math.random() * (99 - 10 + 1)) + 10;
  let b = Math.floor(Math.random() * (a - 10 + 1)) + 10;
  return {a, b, operation: arithmeticOperations.MINUS};
}

function getRandomEnumValue(anEnum) {
  //save enums inside array
  const enumValues = Object.keys(anEnum);

  //Generate a random index (max is array length)
  const randomIndex = Math.floor(Math.random() * enumValues.length);
  // get the random enum value

  const randomEnumKey = enumValues[randomIndex];
  return anEnum[randomEnumKey];
  // if you want to have the key than return randomEnumKey
  // return randomEnumKey;
}

</script>
