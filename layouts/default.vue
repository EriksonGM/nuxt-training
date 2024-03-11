<script setup lang="ts">

import Footer from "~/components/layout/Footer.vue";
import Sidebar from "~/components/layout/Sidebar.vue";
import Navbar from "~/components/layout/Navbar.vue";
</script>

<template>
  <div class="drawer lg:drawer-open">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <!-- Navbar -->
      <Navbar/>
      <div class="container p-5 min-w-full h-full">
        <slot/>
      </div>
      <Footer/>
    </div>
    <div class="drawer-side">
      <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay bg-red-600" style="opacity: 1"></label>
     <Sidebar/>
    </div>
  </div>
</template>

<style scoped>

</style>