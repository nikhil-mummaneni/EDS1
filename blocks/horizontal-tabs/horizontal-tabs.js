import {
  div,
} from '../../scripts/dom-builder.js';

export default function decorate(block) {
  block.textContent = '';
  block.append('this is text');
}
