import {
    div,
    span,
  } from '../../scripts/dom-builder.js';

export default function decorate(block) {
    const primaryDiv = div({ class: 'tw-flex tw-w-full tw-bg-grey-900 tw-text-grey-300 tw-z-[100] tw-relative tw-justify-between' });
    const logo = document.createElement('div');
    logo.className = 'logo tw-py-16';
    const linksContainer = document.createElement('div');
    linksContainer.className = 'links-container tw-flex tw-items-center';
    const links = document.createElement('div');
    links.className = 'links child tw-list-none tw-flex tw-items-stretch tw-text-sm tw-h-full';
    const resourceForm = document.createElement('div');
    resourceForm.className = 'resourceForm';
  
    const blockSize = [...block.children].length;
  
    [...block.children].forEach((row, index) => {
      if (index === 0) {
        const headerbar = document.querySelector('.headerbar p');
        headerbar.classList.add('tw-mb-0');
        logo.append(row);
      } else if (index >= 1 && index <= (blockSize - 2)) {
        row.className = 'tw-inline-flex tw-items-center tw-mr-8';
  
        links.append(row);
        [...row.children].forEach((child) => {
          // Remove 'button-container' class
          if (child.classList.contains('button-container')) {
            child.classList.remove('button-container');
            child.classList.add('cta-container');
  
            const parEffect = row.querySelector('.cta-container p');
            parEffect.classList.add('tw-mb-0');
  
            const iconEffect = links.querySelectorAll('img');
            iconEffect.forEach((imgTag) => {
              imgTag.classList.add(...'tw-text-grey-300 tw-mr-8'.split(' '));
            });
            const anchorEffect = row.querySelector('.cta-container a');
            anchorEffect.classList.add(...'tw-text-grey-300 hover:tw-text-white tw-ml-16'.split(' '));
            anchorEffect.classList.add('tw-flex', 'tw-items-center');
          }
          const linkItems = links.querySelectorAll('.tw-inline-flex.tw-items-center.tw-mr-8');
          linkItems.forEach((linkItem) => {
            // Select the <img> tag within the <picture>
            const imgTag = linkItem.querySelector('img');
            // Select the anchor tag
            const anchor = linkItem.querySelector('a');
            if (imgTag && anchor) {
            // Insert the <img> tag below the anchor tag
              anchor.insertAdjacentElement('afterbegin', imgTag);
            }
          });
          // Update the anchor tag
          const anchor = child.querySelector('a');
          if (anchor) {
            anchor.classList.remove('button'); // Remove 'button' class
            anchor.classList.add('cta'); // Add 'cta' class
            anchor.removeAttribute('title');
          }
        });
      } else if (index === (blockSize - 1)) {
        resourceForm.append(row);
        [...row.children].forEach((child) => {
          // Remove 'button-container' class
          if (child.classList.contains('button-container')) {
            child.classList.remove('button-container');
            child.classList.add('cta-container');
          }
  
          // Update the anchor tag
          const anchor = child.querySelector('a');
          if (anchor) {
            anchor.classList.remove('button'); // Remove 'button' class
            anchor.className = 'tw-text-mobBase md:tw-text-base tw-flex tw-items-center tw-whitespace-nowrap focus-visible:tw-outline focus-visible:tw-outline-2 focus-visible:tw-outline-offset-2 focus-visible:tw-outline-blue-700 tw-rounded tw-border tw-py-12 tw-px-16 md:tw-px-20 active:tw-bg-blue-900 tw-border-blue-700 tw-text-white tw-bg-gradient-to-r tw-bg-blue-700 tw-from-blue-800 tw-via-blue-800 tw-to-blue-800 tw-bg-bottom tw-bg-no-repeat tw-bg-[length:100%_0px] hover:tw-bg-blue-800 hover:tw-text-gray-200 tw-transition-all tw-h-full tw-rounded-none lg:tw-px-32 tw-py-20'; // Add 'cta' class
            anchor.removeAttribute('title');
          }
        });
        const btnContainer = row.querySelector('.resourceForm p');
        btnContainer.classList.add('tw-mb-0');
      }
    });
  
    linksContainer.append(links);
    linksContainer.append(resourceForm);
    primaryDiv.append(logo);
    primaryDiv.append(linksContainer);
    block.textContent = '';
    block.classList.add('tw');
    block.appendChild(primaryDiv);
  }