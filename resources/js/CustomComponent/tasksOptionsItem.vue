<template>
    <div class="border border-slate-200 p-2">
        <span class="m-1">{{ value }}</span>
        <span class="m-1"><Checkbox @update:checked="updateCheckbox"/></span>
    </div>
</template>

<script setup>
    import Checkbox from "../Components/Checkbox.vue";

    const props = defineProps(['value', 'index']);

    const emit = defineEmits(['changeOption']);

    function updateCheckbox(val) {
        emit('changeOption', {
            value: val,
            index: props.index,
        });
    }
</script>