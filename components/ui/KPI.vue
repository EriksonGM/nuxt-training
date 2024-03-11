<script setup lang="ts">
const prop = defineProps({
  icon: String,
  value : String,
  title : String
})
</script>

<template>
  <div class="flex justify-between border rounded-2xl border-zinc-400-100 p-4 max-w-md shadow hover:shadow-xl">
    <i :class="icon" class="text-8xl border rounded-2xl bg-zinc-200 inline-block">
    </i>
    <div class="ml-2">
      <span class="text-7xl">{{value}}</span>
      <label class="block">{{title}}</label>
    </div>
  </div>
</template>

<style scoped>

</style>