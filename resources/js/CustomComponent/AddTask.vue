<!-- <template>
  <div
      class="p-3 my-3"
      :class="{
        'bg-blue-300':state.res===null,
        'bg-orange-600':!result && state.res!==null,
        'bg-emerald-400':result 
      }"
  >
    <span class="px-2">{{ task.a }}</span>
    <span class="px-2">{{ task.operation }}</span>
    <span class="px-2">{{ task.b }}</span>
    <span class="px-2">=</span>
    <TextInput
        v-model="state.res"
        onkeyup="this.value = this.value.replace (/\D/, '')"
        class="px-2 w-16 text-center"
    />
  </div>
</template>

<script setup>

import TextInput from '../Components/TextInput.vue';
import {computed, reactive, watch} from "vue";
import {arithmeticOperations} from "@/enums";

const props = defineProps({
  task: Object,
});

const state = reactive({res: null});

const emit = defineEmits(['changeTrue', 'changeFalse']);

const result = computed(() => {
  switch (props.task.operation) {
    case arithmeticOperations.PLUS:
      return +state.res === props.task.a + props.task.b;
    case arithmeticOperations.MINUS:
      return +state.res === props.task.a - props.task.b;
    case "x": //додати до enum
      return +state.res === props.task.a * props.task.b;
  }
})

watch(state, () => {
  if(result.value) {
    emit('changeTrue');
  } else {
    emit('changeFalse');
  }
})

watch(props, async () => {
  state.res = null;
})

</script> -->

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