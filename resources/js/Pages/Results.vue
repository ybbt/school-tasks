<template #results>
    <h1 class="text-4xl text-center mt-10">Результати</h1>
    <div class="flex justify-center flex-col mx-20  min-w-max">
        <ResultTable  :results="results" ></ResultTable>

    </div>
</template>

<script setup>
    import ResultTable from "../CustomComponent/ResultTable.vue";

    const props = defineProps(['results'])
</script>