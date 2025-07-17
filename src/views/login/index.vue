<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const router = useRouter()
function onLogin() {
  // 这里应调用后端API校验
  router.push('/home')
}
</script>

<template>
  <div class="login-page">
    <h2>登录</h2>
    <form @submit.prevent="onLogin">
      <input v-model="username" placeholder="用户名">
      <input v-model="password" type="password" placeholder="密码">
      <button type="submit">
        登录
      </button>
    </form>
    <div>
      没有账号？<router-link to="/register">
        注册
      </router-link>
    </div>
  </div>
</template>
