import {
  div, span,
} from '../../scripts/dom-builder.js';

// breadcrumb functionality implementation
export default function decorate(block) {
  const sectionDiv = document.createElement('section');
  sectionDiv.className = 'split-component-right global-pt-32 md:global-pt-48 global-pb-32 md:global-pb-48';
  const parentDiv = div({ class: 'global-container global-flex global-flex-col md:global-flex-row md:global-justify-between' });
  sectionDiv.appendChild(parentDiv);
  const imageDiv = div({ class: 'split-component-image global-w-full md:global-w-6/12 global-flex global-flex-col global-justify-center' });
  parentDiv.appendChild(imageDiv);
  const imageDiv1 = div({ class: 'atomic-child' });
  imageDiv.appendChild(imageDiv1);
  const imageDiv2 = div({ class: 'global-pb-16 md:global-pb-20' });
  imageDiv1.appendChild(imageDiv2);

  const container = block.querySelector('div');
  const contentContainer = container.querySelector('div');
  const image = contentContainer.querySelector('picture > img');
  const imageTag = document.createElement('img');
  imageTag.className = 'global-aspect-4/3';
  imageTag.src = image.src;
  imageDiv2.appendChild(imageTag);

  const headingContainer = block.getElementsByTagName('div')[4];
  const heading = headingContainer.querySelector('h3');
  const link = headingContainer.querySelector('a');

  const contentDiv = div({ class: 'split-component-content global-w-full md:global-w-6/12 global-pt-24 md:global-pt-0 md:global-pl-[4.1666666666667%] lg:global-px-[4.1666666666667%] global-flex global-flex-col global-justify-center' });
  parentDiv.appendChild(contentDiv);
  const contentDiv1 = div({ class: 'atomic-child' });
  contentDiv.appendChild(contentDiv1);
  const headingdiv = div({ class: 'atomic-heading-minimal global-pb-16 md:global-pb-20' });
  contentDiv1.appendChild(headingdiv);
  const h3tag = document.createElement('h3');
  h3tag.className = 'text-delta global-text-grey-900 global-break-words';
  h3tag.textContent = heading.textContent;
  headingdiv.appendChild(h3tag);

  const contentDiv2 = div({ class: 'atomic-child' });
  contentDiv.appendChild(contentDiv2);
  const buttonDiv1 = div({ class: 'atomic-buttons | global-inline-flex global-w-full md:global-w-auto md:global-flex global-items-center global-flex-wrap global-gap-x-16 global-gap-y-16 global-pb-16 md:global-pb-20' });
  contentDiv2.appendChild(buttonDiv1);
  const buttonDiv2 = div({ class: 'global-w-full md:global-w-auto' });
  buttonDiv1.appendChild(buttonDiv2);
  const anchorTag = document.createElement('a');
  anchorTag.className = 'global-text-mobBase md:global-text-base global-inline-block focus-visible:global-outline-none global-whitespace-nowrap focus-visible:global-ring-offset-2 focus-visible:global-ring-2 focus-visible:global-ring-blue-700 global-rounded global-border global-py-12 global-px-16 md:global-px-20 active:global-bg-blue-900 global-border-blue-700 global-text-white global-bg-gradient-to-r global-bg-blue-700 global-from-blue-800 global-via-blue-800 global-to-blue-800 global-bg-bottom global-bg-no-repeat global-bg-[length:100%_0px] hover:global-bg-[length:100%_100%] global-transition-all motion-reduce:global-transition-none global-w-full md:global-w-auto';
  anchorTag.href = link.href;
  buttonDiv2.appendChild(anchorTag);

  const anchorDiv = div({ class: 'global-flex global-items-center global-justify-between' });
  anchorTag.appendChild(anchorDiv);
  const spantag = span({ class: 'global-whitespace-normal global-text-left' });
  spantag.textContent = link.textContent;
  anchorDiv.appendChild(spantag);
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', '16');
  svg.setAttribute('height', '14');
  svg.setAttribute('viewBox', '0 0 16 14');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('class', 'global-block global-ml-16 global-flex-shrink-0');
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

  // Styling adjustments for parent element
  block.parentElement.style.maxWidth = '100%';
  block.parentElement.style.padding = '0';
  block.textContent = '';
  block.append(sectionDiv);
}
