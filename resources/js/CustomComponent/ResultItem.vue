<template>
    <tr>
      <td class="border border-slate-300 bg-gray-50 px-2 grow md:w-auto w-3/6">{{(DateTime.fromISO(result.created_at)).toLocaleString(DateTime.DATETIME_FULL) }}</td>
      <td class="border border-slate-300 bg-gray-50 px-2 grow md:w-auto w-3/6">{{result.name}}</td>
      <td class="border border-slate-300 bg-gray-50 px-2 grow md:w-auto w-3/6">{{result.operation}}</td>
      <td class="border border-slate-300 bg-gray-50 px-2 grow md:w-auto w-3/6">{{result.resolution_time}}</td>
    </tr>
</template>

<script setup>
  import { DateTime } from "luxon";

    const props = defineProps({
        result: Object,
    });
</script>