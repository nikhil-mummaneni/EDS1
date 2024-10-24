import {
  div, span,
} from '../../scripts/dom-builder.js';

// breadcrumb functionality implementation
export default function decorate(block) {
  const sectionDiv = document.createElement('section');
  sectionDiv.className = 'split-component-right tw-pt-32 md:tw-pt-48 tw-pb-32 md:tw-pb-48';
  const parentDiv = div({ class: 'tw-container tw-flex tw-flex-col md:tw-flex-row md:tw-justify-between' });
  sectionDiv.appendChild(parentDiv);
  const imageDiv = div({ class: 'split-component-image tw-w-full md:tw-w-6/12 tw-flex tw-flex-col tw-justify-center' });
  parentDiv.appendChild(imageDiv);
  const imageDiv1 = div({ class: 'atomic-child' });
  imageDiv.appendChild(imageDiv1);
  const imageDiv2 = div({ class: 'tw-pb-16 md:tw-pb-20' });
  imageDiv1.appendChild(imageDiv2);

  const container = block.querySelector('div');
  const contentContainer = container.querySelector('div');
  const image = contentContainer.querySelector('picture > img');
  const imageTag = document.createElement('img');
  imageTag.className = 'tw-aspect-4/3';
  imageTag.src = image.src;
  imageDiv2.appendChild(imageTag);

  const headingContainer = block.getElementsByTagName('div')[3];
  const heading = headingContainer.querySelector('h3 strong');

  const linkContainer = block.getElementsByTagName('div')[4];
  const link = linkContainer.querySelector('h3 strong');

  const contentDiv = div({ class: 'ssplit-component-content tw-w-full md:tw-w-6/12 tw-pt-24 md:tw-pt-0 md:tw-pl-[4.1666666666667%] lg:tw-px-[4.1666666666667%] tw-flex tw-flex-col tw-justify-center' });
  parentDiv.appendChild(contentDiv);
  const contnetDiv1 = div({ class: 'atomic-child' });
  contentDiv.appendChild(contnetDiv1);
  const headingdiv = div({ class: 'atomic-heading-minimal tw-pb-16 md:tw-pb-20' });
  contnetDiv1.appendChild(headingdiv);
  const h3tag = document.createElement('h3');
  h3tag.className = 'text-delta tw-text-grey-900 tw-break-words';
  h3tag.textContent = heading.textContent;
  headingdiv.appendChild(h3tag);

  const contnetDiv2 = div({ class: 'atomic-child' });
  contentDiv.appendChild(contnetDiv2);
  const buttonDiv1 = div({ class: 'atomic-buttons | tw-inline-flex tw-w-full md:tw-w-auto md:tw-flex tw-items-center tw-flex-wrap tw-gap-x-16 tw-gap-y-16 tw-pb-16 md:tw-pb-20' });
  contnetDiv2.appendChild(buttonDiv1);
  const buttonDiv2 = div({ class: 'tw-w-full md:tw-w-auto' });
  buttonDiv1.appendChild(buttonDiv2);
  const anchorTag = document.createElement('a');
  anchorTag.className = 'tw-text-mobBase md:tw-text-base tw-inline-block focus-visible:tw-outline-none tw-whitespace-nowrap focus-visible:tw-ring-offset-2 focus-visible:tw-ring-2 focus-visible:tw-ring-blue-700 tw-rounded tw-border tw-py-12 tw-px-16 md:tw-px-20 active:tw-bg-blue-900 tw-border-blue-700 tw-text-white tw-bg-gradient-to-r tw-bg-blue-700 tw-from-blue-800 tw-via-blue-800 tw-to-blue-800 tw-bg-bottom tw-bg-no-repeat tw-bg-[length:100%_0px] hover:tw-bg-[length:100%_100%] tw-transition-all motion-reduce:tw-transition-none tw-w-full md:tw-w-auto';
  anchorTag.href = link.href;
  buttonDiv2.appendChild(anchorTag);

  const anchorDiv = div({ class: 'tw-flex tw-items-center tw-justify-between' });
  anchorTag.appendChild(anchorDiv);
  const spantag = span({ class: 'tw-whitespace-normal tw-text-left' });
  spantag.textContent = link.textContent;
  anchorDiv.appendChild(spantag);
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', '16');
  svg.setAttribute('height', '14');
  svg.setAttribute('viewBox', '0 0 16 14');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('class', 'tw-block tw-ml-16 tw-flex-shrink-0');
  svg.setAttribute('data-di-rand', '1728544798255');
  const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path1.setAttribute('d', 'M0 7L15 7');
  path1.setAttribute('stroke', 'currentColor');
  // Create the second path element
  const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path2.setAttribute('d', 'M9 1L15 7L9 13');
  path2.setAttribute('stroke', 'currentColor');
  svg.appendChild(path1);
  svg.appendChild(path2);
  anchorDiv.appendChild(svg);

  block.textContent = '';
  block.classList.add('tw');
  block.append(sectionDiv);
}
