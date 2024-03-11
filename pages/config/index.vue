<script setup lang="ts">

import PageHeader from "~/components/layout/PageHeader.vue";

const {apiUrl, company} = useRuntimeConfig().public;
</script>

<template>
<PageHeader title="Configurações" icon="ti ti-settings"/>
  <p class="text-5xl"><strong>API URL:</strong> {{apiUrl}}</p>
  <p class="text-5xl"><strong>Company:</strong> {{company}}</p>
</template>

<style scoped>

</style>