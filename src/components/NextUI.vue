<script setup lang="ts">
import { applyPureReactInVue } from 'veaury'
import { NextUIProvider } from '@nextui-org/react'
const router = useRouter()
const ReactNextUIProvider = applyPureReactInVue(NextUIProvider)
</script>

<template>
  <ReactNextUIProvider :navigate="router.push">
    <slot />
  </ReactNextUIProvider>
</template>
