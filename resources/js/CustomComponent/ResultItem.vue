<template>
    <tr>
      <td class="border border-slate-300 bg-gray-50 px-2">{{(DateTime.fromISO(result.created_at)).toLocaleString(DateTime.DATETIME_FULL) }}</td>
      <td class="border border-slate-300 bg-gray-50 px-2">{{result.name}}</td>
      <td class="border border-slate-300 bg-gray-50 px-2">{{result.operation}}</td>
      <td class="border border-slate-300 bg-gray-50 px-2">{{result.resolution_time}}</td>
    </tr>
</template>

<script setup>
  import { DateTime } from "luxon";

    const props = defineProps({
        result: Object,
    });
</script>