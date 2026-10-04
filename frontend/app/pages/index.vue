<template>
  <main class="min-h-screen flex flex-col items-center justify-center gap-4">
    <h1 class="text-4xl font-bold">UP-FANS</h1>
    <p class="text-gray-500">脚手架就绪 · API 探针：{{ apiState }}</p>
  </main>
</template>

<script setup lang="ts">
const { data, error, status } = useFetch<{ status: string }>("/api/healthz", { lazy: true });
const apiState = computed(() =>
  status.value === "success" ? `OK (${data.value?.status})` : `未连接: ${error.value?.message ?? "..."}`,
);
</script>
