import { mount } from '@vue/test-utils';
import { expect, test } from 'vitest';
import { HelloWorld } from './../src/components/HelloWorld.js';

test('mount component', () => {
  expect(HelloWorld).toBeTruthy();
  const wrapper = mount(HelloWorld);
});
