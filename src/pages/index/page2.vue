<script setup lang="ts">
const bool = ref(false)

setTimeout(() => {
  bool.value = true
})
</script>

<template>
  <div class="text-center">
    <h1>Page2</h1>
    <NextLink v-if="!bool" href="/#">Link</NextLink>
  </div>
</template>

<style scoped>

</style>
