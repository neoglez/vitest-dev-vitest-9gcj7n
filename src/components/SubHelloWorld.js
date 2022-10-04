import { defineComponent, h } from 'vue';

export const vueComponent = defineComponent({
  data: () => {
    return {
      timesData: 0,
    };
  },
  props: {
    times: {
      type: Number,
      required: true,
    },
  },
  render() {
    return h('div', { id: 'hello-world1' }, [
      h('p', {}, 'Click the button'),
      h(
        'button',
        {
          onClick: () => (this.timesData = this.timesData + this.times + 1),
        },
        'x1'
      ),
      h('p', {}, `You clicked ${this.timesData} times.`),
    ]);
  },
});
