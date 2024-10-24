import { decorateIcons } from '../../scripts/aem.js';
import { div, span } from '../../scripts/dom-builder.js';

export default function decorate(block) {
  const tw = document.createElement('div');
  alert('test 1');
  block.append(tw);
}
