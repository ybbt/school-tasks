<template>
  <TasksLayout>
    <template #tasks>
      <AddTask
        :tasksArr="state.tasksArr"
      />
      <div class="flex justify-center">
        <PrimaryButton 
            @click="newTasks" 
            class="text-xl bg-blue-900"
            :class="{
              'hidden':state.isAllRightAnswer===false,
            }"
          >
            Нові приклади
        </PrimaryButton>

      </div>
    </template>
   
    <template #results>
      <ResultTable  :results="results" ></ResultTable>
    </template>
  </TasksLayout>
</template>

<script setup>
import TasksLayout from "../Layouts/TasksLayout.vue";
import AddTask from '../CustomComponent/AddTask.vue';
import PrimaryButton from '../Components/PrimaryButton.vue';
import {reactive} from "vue";
import {arithmeticOperations} from '../enums';

const state = reactive({tasksArr: []});

newTasks();

function newTasks() {
  state.tasksArr.length = 0;
  for (let i = 0; i < 10; i++) {
    let operationsVariant = [arithmeticOperations.PLUS.sign, arithmeticOperations.MINUS.sign];
    let operation = getRandomEnumValue(operationsVariant);

    switch (operation) {
      case arithmeticOperations.PLUS.sign:
        state.tasksArr.push(addTask());
        break;
      case arithmeticOperations.MINUS.sign:
        state.tasksArr.push(subTask());
        break;
    }
  }
}

function addTask() {
  let a = Math.floor(Math.random() * (90 - 10 + 1)) + 10;
  let b = Math.floor(Math.random() * (100 - a - 10 + 1)) + 10;
  return {a, b, operation: arithmeticOperations.PLUS.sign};
}

function subTask() {
  let a = Math.floor(Math.random() * (99 - 10 + 1)) + 10;
  let b = Math.floor(Math.random() * (a - 10 + 1)) + 10;
  return {a, b, operation: arithmeticOperations.MINUS.sign};
}

function getRandomEnumValue(anArr) {
  
  const randomIndex = Math.floor(Math.random() * anArr.length);

  return anArr[randomIndex];

}

</script>
