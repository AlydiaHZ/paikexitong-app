import { App as CapApp } from '@capacitor/app'
import { IonicVue } from '@ionic/vue'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

// 核心样式
import '@ionic/vue/css/core.css'
// 可选样式
import '@ionic/vue/css/normalize.css'
import '@ionic/vue/css/structure.css'
import '@ionic/vue/css/typography.css'
import '@ionic/vue/css/padding.css'
import '@ionic/vue/css/float-elements.css'
import '@ionic/vue/css/text-alignment.css'
import '@ionic/vue/css/text-transformation.css'
import '@ionic/vue/css/flex-utils.css'
import '@ionic/vue/css/display.css'

import '@/styles/index.scss'

import 'virtual:uno.css'

const app = createApp(App)
app.use(IonicVue)
app.use(createPinia())
app.use(router)

router.isReady().then(() => {
  app.mount('#app')
})

CapApp.addListener('backButton', () => {
  const homeRoutes = ['/home', '/messages', '/profile']
  const currentPath = router.currentRoute.value.path

  if (homeRoutes.includes(currentPath)) {
    CapApp.exitApp()
  }
  // router.back()
})
