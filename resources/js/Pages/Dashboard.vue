<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link } from '@inertiajs/inertia-vue3';
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Dashboard
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">
                        You're logged in!
                    </div>
                </div>
            </div>
        </div>
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">
                        <Link href="/addition" class="text-sm text-gray-700 dark:text-gray-500 underline">Додавання та віднімання</Link>
                    </div>
                    <div class="p-6 bg-white border-b border-gray-200">
                        <Link href="/multiplication" class="text-sm text-gray-700 dark:text-gray-500 underline">Множення</Link>
                    </div>
                    <div class="p-6 bg-white border-b border-gray-200">
                        <Link href="/division" class="text-sm text-gray-700 dark:text-gray-500 underline">Ділення</Link>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
