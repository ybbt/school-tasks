<template>
  <div class="fixed top-0 right-0 px-6 py-4 sm:block">
    <Link v-if="$page.props.auth.user" :href="route('dashboard')" class="text-sm text-gray-700 dark:text-gray-500 underline">Dashboard</Link>
  </div>
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