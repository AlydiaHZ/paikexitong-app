<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
function isActive(path: string) {
  return route.path === path
}
</script>

<template>
  <nav class="tab-bar">
    <router-link to="/home" class="tab-item" :class="{ active: isActive('/home') }">
      <span>首页</span>
    </router-link>
    <router-link to="/messages" class="tab-item" :class="{ active: isActive('/messages') }">
      <span>消息</span>
    </router-link>
    <router-link to="/profile" class="tab-item" :class="{ active: isActive('/profile') }">
      <span>我的</span>
    </router-link>
  </nav>
</template>

<style scoped>
.tab-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 56px;
  display: flex;
  background: #fff;
  border-top: 1px solid #eee;
  z-index: 100;
  /* 防止被拉伸 */
  will-change: transform;
  /* iOS防止橡皮筋拉伸 */
  -webkit-overflow-scrolling: auto;
  touch-action: none;
}

.tab-item {
  flex: 1;
  text-align: center;
  line-height: 56px;
  color: #888;
  text-decoration: none;
  font-size: 16px;
}

.tab-item.active {
  color: #42b983;
  font-weight: bold;
}
</style>
