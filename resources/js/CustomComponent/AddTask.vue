<template>
  <div class="bg-orange-400 p-3 my-3" :class="{' bg-emerald-400':result}">
    <span class="px-2">{{ a }}</span>
    <span class="px-2">+</span>
    <span class="px-2">{{ b }}</span>
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

const props = defineProps({
  a: Number,
  b: Number,
});

const state = reactive({res: null});

const result = computed(() => {
  return +state.res === props.a + props.b;
})

watch(props, async () => {
  state.res = null;
})

</script>