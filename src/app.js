import { createSSRApp } from 'vue';
import { vueComponent as App } from './components/App.js';
import { h } from 'vue';

export function createApp() {
  return createSSRApp({
    render: () => h(App),
  });
}
