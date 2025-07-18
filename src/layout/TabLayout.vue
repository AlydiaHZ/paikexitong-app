<script setup lang="ts">
import { IonRouterOutlet } from '@ionic/vue'
</script>

<template>
  <ion-page>
    <ion-tabs>
      <IonRouterOutlet />
      <TabBar />
    </ion-tabs>
  </ion-page>
</template>

<style lang="scss" scoped>
</style>
