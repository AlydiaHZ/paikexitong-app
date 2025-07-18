<script setup lang="ts">
import { IonPage, useIonRouter } from '@ionic/vue'
import { ref } from 'vue'

const username = ref('')
const password = ref('')
const router = useIonRouter()
function onLogin() {
  // 这里应调用后端API校验
  router.push('/home')
}
</script>

<template>
  <IonPage>
    <h2>登录</h2>
    <ionList>
      <ionItem>
        <ionInput v-model="username" label="用户名" placeholder="请输入用户名" />
      </ionItem>
      <ionItem>
        <ionInput v-model="password" label="密码" type="password" placeholder="请输入密码">
          <template #end>
            <ionInputPasswordToggle />
          </template>
        </ionInput>
      </ionItem>
    </ionList>
    <ionButton @click="onLogin">
      登录
    </ionButton>
  </IonPage>
</template>
