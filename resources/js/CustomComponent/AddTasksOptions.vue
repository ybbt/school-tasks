<template>
        <tasksOptionsItem
            v-for="(item, index) in state.optionsArr" 
            :value="item"
            :index="index"
            @change-option="setOptions"
        />
</template>

  <script setup>
    import tasksOptionsItem from "../CustomComponent/tasksOptionsItem.vue";
    import {reactive, watch } from "vue";

    
    const state = reactive(
    {
        optionsArr: [1,2,3,4,5,6,7,8,9,10],
        selectOptionsArr: [
            {value: 1, isSelect: false},
            {value: 2, isSelect: false},
            {value: 3, isSelect: false},
            {value: 4, isSelect: false},
            {value: 5, isSelect: false},
            {value: 6, isSelect: false},
            {value: 7, isSelect: false},
            {value: 8, isSelect: false},
            {value: 9, isSelect: false},
            {value: 10, isSelect: false},
        ],   
    });

    const emit = defineEmits(['changeOptionsList']);
    
    function setOptions(value) {
        state.selectOptionsArr[value.index].isSelect = value.value;
    }

    watch(state.selectOptionsArr, () => {
        let resultArr = state.selectOptionsArr.reduce((optionsItemsArr, item)=>{
            if (item.isSelect) {
                optionsItemsArr.push(item.value);
            }
            return optionsItemsArr;
        }, []);
        emit('changeOptionsList', {
            optionsList: resultArr,
        });
    })
    
</script>