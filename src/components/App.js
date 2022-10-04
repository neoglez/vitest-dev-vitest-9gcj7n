import { defineComponent, h } from 'vue';
import { vueComponent as HelloWorld } from './HelloWorld.js';

export const vueComponent = defineComponent({
  components: { HelloWorld },
  render() {
    return h('div', { id: 'app' }, [
      h('img', { alt: 'Vue logo', src: 'https://vuejs.org/images/logo.png' }),
      h(HelloWorld, { msg: 'Welcome to Your Vue.js App' }),
    ]);
  },
});
