import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.churchcrm.ui',
  appName: 'churchcrm-ui',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
