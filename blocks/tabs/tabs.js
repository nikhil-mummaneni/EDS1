/* import { decorateIcons } from '../../scripts/aem.js'; */
/* import { div, span } from '../../scripts/dom-builder.js'; */

export default function decorate(block) {
  const tw = document.createElement('div');
  const subATag = document.createElement('a');
  subATag.setAttribute('href', 'http://www.sciex.com');
  subATag.textContent = 'Test link';
  tw.appendChild(subATag);
  block.append(tw);
}
