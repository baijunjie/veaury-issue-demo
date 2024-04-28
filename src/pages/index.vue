<script setup lang="ts">
const tabs = [
  {
    title: "page1",
    href: "/page1",
  },
  {
    title: "page2",
    href: "/page2",
  },
];
</script>

<template>
 <div class="text-center">
   <Tabs :routeTabs="tabs" />
   <NuxtPage
     :transition="{
       name: 'tab',
       mode: 'out-in',
     }"
   />
 </div>
</template>
