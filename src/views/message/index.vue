<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id
</script>

<template>
  <div class="notification-detail">
    <h2>通知详情</h2>
    <div>通知ID: {{ id }}</div>
    <!-- 这里展示通知详细内容 -->
  </div>
</template>
