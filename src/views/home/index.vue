<template>
  <div>
    <h2>首页</h2>
    <router-link to="/schedule/1">
      查看课表详情
    </router-link>
    <p v-for="i in 80" :key="i">
      1
    </p>
  </div>
</template>
