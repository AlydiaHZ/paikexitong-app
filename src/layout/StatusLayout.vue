<script setup lang="ts">
import { StatusBar } from '@capacitor/status-bar'
import { computed, onMounted, ref } from 'vue'
import MainLayout from './MainLayout.vue'

const infomation = ref<Record<string, any>>({})
const errorMsg = ref('')
onMounted(async () => {
  try {
    infomation.value = await StatusBar.getInfo()
  }
  catch (err) {
    errorMsg.value = `获取状态栏信息失败：${(err as Error).message}`
  }
})

const barHeight = computed(() => infomation.value.height || 38)
</script>

<template>
  <div class="status-bar" :style="{ height: `${barHeight}px` }" />
  <div :style="{ marginTop: `${barHeight}px` }">
    <MainLayout />
  </div>
</template>

<style lang="scss" scoped>
.status-bar {
    background-color: #fff;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    pointer-events: none; /* 保证点击事件穿透 */
}
</style>
