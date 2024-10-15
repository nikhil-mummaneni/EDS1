import {
  div,
  span,
} from '../../scripts/dom-builder.js';

export default function decorate(block) {
  const parentDiv = div({ class: 'tw-pb-32 md:tw-pb-48' });
  const sectionDiv = document.createElement('section');
  sectionDiv.className = 'tw-relative tw-bg-cover tw-bg-center tw-bg-no-repeat';
  parentDiv.appendChild(sectionDiv);
  const parentDiv1 = div({ class: 'tw-relative tw-min-h-[420px] md:tw-min-h-[512px]' });

  sectionDiv.appendChild(parentDiv1);
  const container = block.querySelector('div');
  const contentContainer = container.querySelector('div');
  const image = contentContainer.querySelector('p > picture > img');
  const imageTag = document.createElement('img');
  imageTag.className = 'tw-absolute tw-object-cover tw-h-full tw-w-full tw-z-0';
  imageTag.src = image.src;
  parentDiv1.appendChild(imageTag);
  const parentDiv2 = div({
    class: 'overlay tw-absolute tw-bg-black tw-opacity-40 tw-top-0 tw-left-0 tw-right-0 tw-bottom-0 tw-z-0',
  });
  parentDiv1.appendChild(parentDiv2);
  const parentDiv3 = div({
    class: 'tw-relative tw-container tw-py-40 md:tw-pb-64 tw-flex tw-items-end tw-w-full tw-min-h-[420px] md:tw-min-h-[512px] tw-z-10 md:tw-pt-80',
  });
  parentDiv1.appendChild(parentDiv3);
  const parentDiv4 = div({
    class: 'tw-flex tw-flex-col md:tw-flex-row tw-justify-between tw-w-full tw-items-end tw-text-white',
  });
  parentDiv3.appendChild(parentDiv4);
  const parentDiv5 = div({
    class: 'tw-w-full',
  });
  parentDiv4.appendChild(parentDiv5);
  const firstParagraph = document.querySelector('.hero-banner p:nth-child(2)');
  const h1ELement = document.createElement('h1');
  h1ELement.className = 'text-bravo lg:tw-max-w-9/12 xl:tw-max-w-8/12 tw-mt-16 md:tw-mt-20 lg:tw-max-w-9/12 xl:tw-max-w-8/12';
  h1ELement.textContent = firstParagraph.textContent;
  parentDiv5.appendChild(h1ELement);
  const secondParagraph = document.querySelector('.hero-banner p:nth-child(3)');
  const parentDiv6 = div({
    class: 'atomic-richtext-content text-base tw-mt-16 md:tw-mt-20 lg:tw-max-w-6/12 xl:tw-max-w-5/12 xl:tw-max-w-5/12 lg:tw-max-w-6/12',
  });
  parentDiv6.textContent = secondParagraph.textContent;
  parentDiv5.appendChild(parentDiv6);
  const parentDiv7 = div({
    class: 'md:tw-flex md:tw-items-center md:tw-space-x-16',
  });
  parentDiv5.appendChild(parentDiv7);
  const parentDiv8 = div({
    class: 'tw-mt-16 md:tw-mt-20',
  });
  parentDiv7.appendChild(parentDiv8);
  const anchor = document.querySelector('.button-container a');
  const { href } = anchor;
  const text = anchor.textContent;
  const anchorLink = document.createElement('a');
  anchorLink.className = 'tw-text-mobBase md:tw-text-base tw-inline-block focus-visible:tw-outline-none tw-whitespace-nowrap focus-visible:tw-ring-offset-2 focus-visible:tw-ring-2 focus-visible:tw-ring-blue-700 tw-rounded tw-border tw-py-12 tw-px-16 md:tw-px-20 active:tw-bg-blue-900 tw-border-blue-700 tw-text-white tw-bg-gradient-to-r tw-bg-blue-700 tw-from-blue-800 tw-via-blue-800 tw-to-blue-800 tw-bg-bottom tw-bg-no-repeat tw-bg-[length:100%_0px] hover:tw-bg-[length:100%_100%] tw-transition-all motion-reduce:tw-transition-none tw-w-full md:tw-w-auto';
  anchorLink.href = href;
  //   anchorLink.textContent = text;
  const parentDiv9 = div({
    class: 'tw-flex tw-items-center tw-justify-between',
  });
  anchorLink.appendChild(parentDiv9);
  const arrowIcon = span({
    class: 'tw-whitespace-normal tw-text-left',
  });
  arrowIcon.textContent = text;
  parentDiv9.appendChild(arrowIcon);
  parentDiv8.appendChild(anchorLink);
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
  parentDiv9.appendChild(svg);
  block.textContent = '';
  block.classList.add('tw');
  block.parentElement.style.maxWidth = '100%';
  block.parentElement.style.padding = '0';
  block.append(parentDiv);
}
