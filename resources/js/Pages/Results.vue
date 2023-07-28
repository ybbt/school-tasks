<template #results>
    <h1 class="text-4xl text-center mt-10">Результати</h1>
    <div class="sm:mx-20 mx-2">
        <ResultTable  :results="results" ></ResultTable>

    </div>
</template>

<script setup>
    import ResultTable from "../CustomComponent/ResultTable.vue";

    const props = defineProps(['results'])
</script>