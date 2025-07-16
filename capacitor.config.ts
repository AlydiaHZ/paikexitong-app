import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.down.paikexitong',
  appName: 'paikexitong',
  webDir: 'dist',
  server:{
    androidScheme:'http',
    url:'http://192.168.1.24:5173/',
  }
};

export default config;
