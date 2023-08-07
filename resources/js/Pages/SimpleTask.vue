<template>
    <TasksLayout>
      <template #tasks>
        <div class="flex flex-wrap justify-center mx-2">
          <AddTasksOptions
            @changeOptionsList="setOptionsList"
          />
        </div>
        <div class="flex flex-col items-center min-w-max">
          <AddTask
            @change-is-all-right-answer="setIsAllRightAnswer"
            :tasksArr="state.tasksArr"
          />
  
        </div>
        <div class="flex justify-center">
          <PrimaryButton 
              @click="newTasks" 
              class="text-xl mt-5"
              :class="{
                'bg-blue-900':state.isAllRightAnswer,
                'bg-gray-400':!state.isAllRightAnswer,
                'hover:bg-gray-400':!state.isAllRightAnswer,
                'active:bg-gray-400':!state.isAllRightAnswer,
              }"
    
              :disabled="!state.isAllRightAnswer"
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
  import AddTasksOptions from "../CustomComponent/AddTasksOptions.vue";
  import AddTask from '../CustomComponent/AddTask.vue';
  import PrimaryButton from '../Components/PrimaryButton.vue';
  import ResultTable from "../CustomComponent/ResultTable.vue";
  import {arithmeticOperations} from '../enums';
  import {reactive} from "vue";
  /** 
   * ? Не розумію, чому не працює router, замість нього Inertia 
   import { router } from '@inertiajs/vue3';
  */
  import {Inertia} from "@inertiajs/inertia";
  import { DateTime } from "luxon";
  
  const props = defineProps(['operation', 'results']);
  
  const state = reactive(
    {
      tasksArr: [],
      DateTimeStart: DateTime.now(),
      DateTimeEnd: null,
      optionsArr: null,
      isAllRightAnswer: false,
      isNotFirstOpenPage: false,
    });
  
  function setOptionsList(val){
    state.optionsArr = val.optionsList;
    updateTask();
  }
  
  function newTasks() {
  
    state.DateTimeEnd = DateTime.now();
  
    let diff = state.DateTimeEnd.diff(state.DateTimeStart);
  
    let operations = state.optionsArr.reduce(function(accum, item){
      return `${accum}, ${item}`
    });

    let data = {
        operation: null,
        resolution_time: diff.toFormat("hh:mm:ss"),
        operation_id: null,
    };

    if (props.operation  === arithmeticOperations.MULTIPLY.operationMark/* 'multiplication' */) {
        let operation = `${arithmeticOperations.MULTIPLY.operationName} (${operations})`;//`множення (${operations})`;

        data.operation = operation;
        data.operation_id = arithmeticOperations.MULTIPLY.operationMark/* 'multiplication' */;
                       
    } else if (props.operation  === arithmeticOperations.COLON.operationMark/* 'division' */) {
        let operation = `${arithmeticOperations.COLON.operationName} (${operations})`;//`ділення (${operations})`;

        data.operation = operation;
        data.operation_id = arithmeticOperations.COLON.operationMark/* 'division' */;
    }
  
  
  
    if (state.isNotFirstOpenPage) {
        /* router */Inertia.post('save_statistics', data);
    }
  
    updateTask();
  }
  
  // TODO Зробити Enum для назви дій. Можливо у вже існуючий Enum
  function updateTask(){
    state.tasksArr.length = 0;
    if (state.optionsArr.length > 0) {
      for (let i = 0; i < 10; i++) {

        if (props.operation  === arithmeticOperations.MULTIPLY.operationMark/* 'multiplication' */) {
            state.tasksArr.push(multTask());            
        } else if (props.operation  === arithmeticOperations.COLON.operationMark/* 'division' */) {
            state.tasksArr.push(divTask());
        }
    
        state.DateTimeStart = DateTime.now();
      }
      
    }
  
    state.isNotFirstOpenPage = true;
  }
  
  
  function multTask() {
    let index = Math.floor(Math.random() * ((state.optionsArr.length) - 0) + 0);
    let a = state.optionsArr[index];
    let b = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    return {a, b, operation: arithmeticOperations.MULTIPLY.sign};
  }

  function divTask() {
    let index = Math.floor(Math.random() * ((state.optionsArr.length) - 0) + 0);
    let a = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    let b = state.optionsArr[index];
    return {a:(a*b), b, operation: arithmeticOperations.COLON.sign};
  }
  
  function setIsAllRightAnswer(val){
    state.isAllRightAnswer = val.isAllRightAnswer;
  }
  
  </script>