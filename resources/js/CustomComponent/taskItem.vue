<template>
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
      case arithmeticOperations.PLUS.sign:
        return +state.res === props.task.a + props.task.b;
      case arithmeticOperations.MINUS.sign:
        return +state.res === props.task.a - props.task.b;
      case arithmeticOperations.MULTIPLY.sign: 
        return +state.res === props.task.a * props.task.b;
      case arithmeticOperations.COLON.sign: 
        return +state.res === props.task.a / props.task.b;
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
  
  </script>