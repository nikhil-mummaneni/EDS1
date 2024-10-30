import {
  div,
  span,
} from '../../scripts/dom-builder.js';

export default function decorate(block) {
  // Main wrapper container
  const wrapper = div({ class: 'tw-pb-32 md:tw-pb-48' });

  // Background section container with styling for alignment
  const backgroundSection = document.createElement('section');
  backgroundSection.className = 'tw-relative tw-bg-cover tw-bg-center tw-bg-no-repeat';
  wrapper.appendChild(backgroundSection);

  // Primary content container with min-height
  const contentContainer = div({ class: 'tw-relative tw-min-h-[420px] md:tw-min-h-[512px]' });
  backgroundSection.appendChild(contentContainer);

  const blockContainer = block.querySelector('div');
  const innerContainer = blockContainer.querySelector('div');

  // Handle the background image setup
  const backgroundImage = innerContainer.querySelector('picture');
  if (backgroundImage) {
    backgroundImage.className = 'tw-absolute tw-object-cover tw-h-full tw-w-full tw-z-0';
    contentContainer.appendChild(backgroundImage);
  }

  // Add overlay to enhance text readability
  const overlay = div({
    class: 'tw-absolute tw-bg-black tw-opacity-40 tw-top-0 tw-left-0 tw-right-0 tw-bottom-0 tw-z-0',
  });
  contentContainer.appendChild(overlay);

  // Container for content layout
  const contentWrapper = div({
    class: 'tw-relative tw-container tw-py-40 md:tw-pb-64 tw-flex tw-items-end tw-w-full tw-min-h-[420px] md:tw-min-h-[512px] tw-z-10 md:tw-pt-80',
  });
  contentContainer.appendChild(contentWrapper);

  // Inner container for flex layout
  const flexContainer = div({
    class: 'tw-flex tw-flex-col md:tw-flex-row tw-justify-between tw-w-full tw-items-end tw-text-white',
  });
  contentWrapper.appendChild(flexContainer);

  const textContainer = div({ class: 'tw-w-full' });
  flexContainer.appendChild(textContainer);

  // Add heading and paragraph
  const heading = block.querySelector('h1');
  const headingElement = document.createElement('h1');
  headingElement.className = 'text-bravo lg:tw-max-w-9/12 xl:tw-max-w-8/12 tw-mt-16 md:tw-mt-20';
  headingElement.textContent = heading.textContent;
  textContainer.appendChild(headingElement);

  const paragraph = block.querySelector('p');
  const paragraphContainer = div({
    class: 'atomic-richtext-content text-base tw-mt-16 md:tw-mt-20 lg:tw-max-w-6/12 xl:tw-max-w-5/12',
  });
  paragraphContainer.textContent = paragraph.textContent;
  textContainer.appendChild(paragraphContainer);

  // CTA section setup
  const ctaWrapper = div({ class: 'md:tw-flex md:tw-items-center md:tw-space-x-16' });
  textContainer.appendChild(ctaWrapper);

  const ctaContainer = div({ class: 'tw-mt-16 md:tw-mt-20' });
  ctaWrapper.appendChild(ctaContainer);

  const linkElement = document.querySelector('a');
  const { href } = linkElement;
  const linkText = linkElement.textContent;

  const ctaLink = document.createElement('a');
  ctaLink.className = 'tw-text-mobBase md:tw-text-base tw-inline-block focus-visible:tw-outline-none tw-whitespace-nowrap focus-visible:tw-ring-offset-2 focus-visible:tw-ring-2 focus-visible:tw-ring-blue-700 tw-rounded tw-border tw-py-12 tw-px-16 md:tw-px-20 active:tw-bg-blue-900 tw-border-blue-700 tw-text-white tw-bg-gradient-to-r tw-bg-blue-700 tw-from-blue-800 tw-via-blue-800 tw-to-blue-800 tw-bg-bottom tw-bg-no-repeat tw-bg-[length:100%_0px] hover:tw-bg-[length:100%_100%] tw-transition-all motion-reduce:tw-transition-none tw-w-full md:tw-w-auto';
  ctaLink.href = href;

  const ctaLinkInnerContainer = div({ class: 'tw-flex tw-items-center tw-justify-between' });
  ctaLink.appendChild(ctaLinkInnerContainer);

  const ctaText = span({ class: 'tw-whitespace-normal tw-text-left' });
  ctaText.textContent = linkText;
  ctaLinkInnerContainer.appendChild(ctaText);

  ctaContainer.appendChild(ctaLink);

  // Add SVG icon for CTA
  const svgIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svgIcon.setAttribute('width', '16');
  svgIcon.setAttribute('height', '14');
  svgIcon.setAttribute('viewBox', '0 0 16 14');
  svgIcon.setAttribute('fill', 'none');
  svgIcon.setAttribute('class', 'tw-block tw-ml-16 tw-flex-shrink-0');
  svgIcon.setAttribute('data-di-rand', '1728544798255');

  const linePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  linePath.setAttribute('d', 'M0 7L15 7');
  linePath.setAttribute('stroke', 'currentColor');

  const arrowPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  arrowPath.setAttribute('d', 'M9 1L15 7L9 13');
  arrowPath.setAttribute('stroke', 'currentColor');

  svgIcon.appendChild(linePath);
  svgIcon.appendChild(arrowPath);
  ctaLinkInnerContainer.appendChild(svgIcon);

  // Apply styling to block and wrapper
  block.parentElement.style.maxWidth = '100%';
  block.parentElement.style.padding = '0';
  block.textContent = '';
  block.classList.add('tw');
  block.append(wrapper);
}
