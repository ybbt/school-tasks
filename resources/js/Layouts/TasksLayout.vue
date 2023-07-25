<template>
    <h1 class="text-green-900 text-4xl text-center">Приклади</h1>
    <div class="flex justify-center ">
      <div class="min-w-max pt-5">
        <!-- <AddTask @changeTrue="taskChangeTrue(index)" @changeFalse="taskChangeFalse(index)" v-for="(item, index) in state.tasksArr" :task="item" class="text-2xl rounded-lg"></AddTask>
        <PrimaryButton 
          @click="newTasks" 
          class="text-xl bg-blue-900"
          :class="{
            'hidden':state.isAllRightAnswer===false,
          }"
        >
          Нові приклади
        </PrimaryButton> -->
        <slot name="tasks"></slot>
      </div>
    </div>
  
    <div class="flex justify-center flex-col mx-20  min-w-max">
      <Link href="/results" class="text-4xl text-center mt-10">Результати</Link>
      <!-- <ResultTable  :results="results" ></ResultTable> -->
      <slot name="results"></slot>
    </div>
  </template>

<script setup>
  import { Link } from '@inertiajs/inertia-vue3';
</script>