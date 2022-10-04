import { createSSRApp } from 'vue';
import * as App from './components/App.js';
import { h } from 'vue';

export function createApp() {
  return createSSRApp({
    //render: () => h('div', {}, 'Hello World'),
    template: '<div>Hello World</div>',
  });
}
