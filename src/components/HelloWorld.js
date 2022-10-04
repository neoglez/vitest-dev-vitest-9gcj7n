import { defineComponent, h } from 'vue';
import { vueComponent as SubHelloWorld } from './SubHelloWorld.js';

export const vueComponent = defineComponent({
  components: { SubHelloWorld },
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  render() {
    return h('div', { id: 'hello-world' }, [
      h('span', {}, this.msg),
      h(SubHelloWorld, { times: 0 }),
      //h('button', {onCLick: () => this.times += 1}, 'x1')
    ]);
  },
});
