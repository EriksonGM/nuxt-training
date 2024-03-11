<script setup lang="ts">
const props = defineProps({
  icon: String,
  title: {type: String, required: true}
})
useHead({
  title: props.title
})
</script>

<template>
  <div class="flex justify-between mb-4">
    <h2 class="text-2xl">
      <i :class="icon" class="mr-2"></i>
      <span>{{ title }}</span>
    </h2>
    <div>
      <slot/>
    </div>
  </div>

</template>

<style scoped>

</style>