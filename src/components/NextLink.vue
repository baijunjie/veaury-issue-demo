<script setup lang="ts">
import { applyPureReactInVue } from 'veaury'
import { Link } from '@nextui-org/react'
defineOptions({ inheritAttrs: false })
const ReactLink = applyPureReactInVue(Link)
</script>

<template>
  <ReactLink
    v-bind="useReactProps($attrs)"
  >
    <div class="flex-1">
      <slot />
    </div>
  </ReactLink>
</template>
