<template>
  <h1 class="text-green-900 text-4xl text-center">Приклади</h1>
  <div class="flex justify-center ">
    <div class="py-5">
      <slot name="tasks"></slot>
    </div>
  </div>

  <div class="mx-2 sm:mx-20 mb-2">
    <Link href="/results" class="text-4xl text-center mt-10">Результати</Link>
    <slot name="results"></slot>
  </div>
</template>

<script setup>
  import { Link } from '@inertiajs/inertia-vue3';
</script>