<template>
  <h1 class="text-green-900 text-4xl text-center">Приклади</h1>
  <div class="flex justify-center ">
    <div class="py-5">
      <slot name="tasks"></slot>
    </div>
  </div>

  <div class="flex justify-center flex-col mx-20  min-w-max">
    <Link href="/results" class="text-4xl text-center mt-10">Результати</Link>
    <slot name="results"></slot>
  </div>
</template>

<script setup>
  import { Link } from '@inertiajs/inertia-vue3';
</script>