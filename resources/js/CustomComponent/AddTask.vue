<template>
  <taskItem 
    @changeTrue="taskChangeTrue(index)" 
    @changeFalse="taskChangeFalse(index)" 
    v-for="(item, index) in tasksArr" 
    :task="item" 
    class="text-2xl rounded-lg "
  >
  </taskItem>

</template>

<script setup>
  import taskItem from "../CustomComponent/taskItem.vue";
  import {reactive, watch, onBeforeUpdate } from "vue";

  const props = defineProps(['tasksArr']);

  const emit = defineEmits(['changeIsAllRightAnswer']);

  const state = reactive(
  {
    answersMarksArr: [false,false,false,false,false,false,false,false,false,false],
  });

  onBeforeUpdate(() => {
    state.answersMarksArr.map(()=>false);
  });

  function taskChangeTrue(value) {
        state.answersMarksArr[value]=true;
  }

  function taskChangeFalse(value) {
      state.answersMarksArr[value]=false;
  }

  watch(state, async () => {
    let isAllRightAnswer = state.answersMarksArr.reduce(function(a,b){return(a && b)});
    emit('changeIsAllRightAnswer', {
      isAllRightAnswer: isAllRightAnswer,
    });
  })
</script>