<template>
    <table class="border-separate border border-slate-400 w-full table-auto">
      <thead>
        <tr>
          <th class="border border-slate-300 bg-gray-200">Завершено</th>
          <th class="border border-slate-300 bg-gray-200">Ім'я</th>
          <th class="border border-slate-300 bg-gray-200">Задача</th>
          <th class="border border-slate-300 bg-gray-200">Час вирішення</th>
        </tr>
      </thead>
      <tbody>
        <ResultItem  v-for="(item) in results.data" :result="item" ></ResultItem>
      </tbody>
    </table>
</template>

<script setup>

  import ResultItem from "./ResultItem.vue";

  const props = defineProps(['results']);

</script>