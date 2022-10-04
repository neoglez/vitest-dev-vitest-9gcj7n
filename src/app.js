import { createSSRApp } from 'vue';
import { vueComponent as App } from './components/App.js';

export function createApp() {
  return createSSRApp(App);
}
