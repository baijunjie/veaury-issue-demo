<script setup lang="ts">
import { applyPureReactInVue } from "veaury";
import { Tabs, Tab, Link } from "@nextui-org/react";
import type { TabItemProps } from "@nextui-org/react";
defineOptions({ inheritAttrs: false });

defineProps<{
  routeTabs?: TabItemProps[];
  slotProps?: Record<string, TabItemProps>;
}>();

const route = useRoute()

const ReactTabs = applyPureReactInVue(Tabs);
const ReactTab = applyPureReactInVue(Tab);
</script>

<template>
  <ReactTabs
    className="mb-8"
    :selectedKey="routeTabs?.length ? route.path : undefined"
  >
    <ReactTab
      v-for="tab in routeTabs"
      :key="tab.href"
      :as="Link"
      v-bind="tab"
    />
  </ReactTabs>
</template>
