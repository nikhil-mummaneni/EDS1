// eslint-disable-next-line no-console
/* import * as domB from '../../scripts/dom-builder.js'; */

const tabComponentSection = document.createElement('section');
tabComponentSection.setAttribute('class', 'tw-pt-32 md:tw-pt-48 tw-pb-32 md:tw-pb-48');

export default async function decorate(block) {
  block.textContent = '';
  block.append('Hello everyone');
}
