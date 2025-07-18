<script setup lang="ts">
import { home, mail, person } from 'ionicons/icons'
</script>

<template>
  <IonTabBar slot="bottom">
    <IonTabButton tab="home" href="/home">
      <IonIcon :icon="home" />
      <IonLabel>首页</IonLabel>
    </IonTabButton>

    <IonTabButton tab="messages" href="/messages">
      <IonIcon :icon="mail" />
      <IonLabel>通知</IonLabel>
    </IonTabButton>

    <IonTabButton tab="profile" href="/profile">
      <IonIcon :icon="person" />
      <IonLabel>我的</IonLabel>
    </IonTabButton>
  </IonTabBar>
</template>
