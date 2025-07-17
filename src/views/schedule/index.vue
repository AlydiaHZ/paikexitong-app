<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id
</script>

<template>
  <div class="schedule-detail">
    <h2>课表详情</h2>
    <div>课程ID: {{ id }}</div>
    <!-- 这里展示课程详细信息 -->
  </div>
</template>
