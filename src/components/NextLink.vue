<script setup lang="ts">
import { applyPureReactInVue } from 'veaury'
import { Link } from '@nextui-org/react'
const ReactLink = applyPureReactInVue(Link)
</script>

<template>
  <ReactLink>
    <div class="flex-1">
      <slot />
    </div>
  </ReactLink>
</template>
