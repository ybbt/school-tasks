<!-- <template>
  <h1 class="text-green-900 text-4xl text-center">Приклади</h1>
  <div class="flex justify-center ">
    <div class="min-w-max pt-5">
      <AddTask @changeTrue="taskChangeTrue(index)" @changeFalse="taskChangeFalse(index)" v-for="(item, index) in state.tasksArr" :task="item" class="text-2xl rounded-lg"></AddTask>
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
  </div>

  <h1 class="text-4xl text-center mt-10">Результати</h1>
  <div class="flex justify-center flex-col mx-20  min-w-max">
    <ResultTable  :results="results" ></ResultTable>
  </div>
</template> -->

<template>
  <TasksLayout>
    <template #tasks>
      <AddTask 
        @changeTrue="taskChangeTrue(index)" 
        @changeFalse="taskChangeFalse(index)" 
        v-for="(item, index) in state.tasksArr" 
        :task="item" 
        class="text-2xl rounded-lg"
      >
      </AddTask>
      <PrimaryButton 
          @click="newTasks" 
          class="text-xl"
          :class="{
            'bg-blue-900':state.isAllRightAnswer,
            'bg-gray-400':!state.isAllRightAnswer,
            'hover:bg-gray-400':!state.isAllRightAnswer,
            'active:bg-gray-400':!state.isAllRightAnswer,
            // 'hidden':state.isAllRightAnswer===false,
          }"

          :disabled="!state.isAllRightAnswer"
      >
          Нові приклади
      </PrimaryButton>
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
import ResultTable from "../CustomComponent/ResultTable.vue";
import {reactive, watch} from "vue";
/** 
 * ? Не розумію, чому не працює router, замість нього Inertia 
 import { router } from '@inertiajs/vue3';
*/
import {Inertia} from "@inertiajs/inertia";
import { DateTime } from "luxon";

const props = defineProps(['operation', 'results'])

// console.log(props.results);

const state = reactive(
  {
    tasksArr: [],
    DateTimeStart: DateTime.now(),
    DateTimeEnd: null,
    answersMarksArr: [false,false,false,false,false,false,false,false,false,false],
    isAllRightAnswer: false,
    isNotFirstOpenPage: false,
  });

newTasks();

function taskChangeTrue(value) {
      state.answersMarksArr[value]=true;
}

function taskChangeFalse(value) {
    state.answersMarksArr[value]=false;
}


function newTasks() {
  state.answersMarksArr.map(()=>false);

  state.DateTimeEnd = DateTime.now();

  let diff = state.DateTimeEnd.diff(state.DateTimeStart);

  // console.log(diff.toFormat("hh:mm:ss"));

  let data = {
    operation: "множення",
    resolution_time: diff.toFormat("hh:mm:ss"),
  }


  if (state.isNotFirstOpenPage) {
      /* router */Inertia.post('/save_statistics', data);
  }

  state.tasksArr.length = 0;
  for (let i = 0; i < 10; i++) {
    state.tasksArr.push(multTask());

    state.DateTimeStart = DateTime.now();
  }

  state.isNotFirstOpenPage = true;

}


function multTask() {
  let a = Math.floor(Math.random() * (6 - 2 + 1)) + 2;
  let b = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  return {a, b, operation: "x"};
}

watch(state, async () => {
  state.isAllRightAnswer = state.answersMarksArr.reduce(function(a,b){return(a && b)});
  
})

</script>
