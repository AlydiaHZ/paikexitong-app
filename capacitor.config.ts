/// <reference types="@capacitor/status-bar" />

import type { CapacitorConfig } from '@capacitor/cli'
import process from 'node:process'

// 获取当前环境（development/production）
const mode = process.env.NODE_ENV || 'production'

const isDev = mode.trim() === 'development'

const config: CapacitorConfig = {
  appId: 'com.down.paikexitong',
  appName: '排课系统',
  webDir: 'dist',
  ...(isDev
    ? {
        server: {
          androidScheme: 'http',
          url: 'http://192.168.1.24:5173/',
        },
      }
    : {}),
  plugins: {
    StatusBar: {
      overlaysWebView: false,
      style: 'LIGHT',
      backgroundColor: '#ffffffff',
    },
  },
}

export default config
