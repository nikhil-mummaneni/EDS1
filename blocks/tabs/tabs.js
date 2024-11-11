import {} from '../../scripts/aem.js';
import {} from '../../scripts/scripts.js';

function addTabData(
  col,
  index,
  rowindex,
  tabsContainer,
  container,
  tabContent,
  flexContainer,
  textContainer, // <-- Trailing comma added here
) {
  // Create the image element
  if (index === 2) {
    const innerDiv = document.createElement('div');
    innerDiv.classList.add('global-mb-20', 'md:global-mb-0', 'md:global-w-[65%]', 'global-aspect-[8/5]');
    innerDiv.innerHTML = col.innerHTML;
    flexContainer.appendChild(innerDiv);
  }

  if (index === 0) {
    const heading = document.createElement('h3');
    heading.classList.add('text-lg-bolder', 'global-text-grey-900', 'global-mb-6', 'md:global-mb-8');
    heading.textContent = col.innerText;
    textContainer.appendChild(heading);
  }

  // Create the paragraph (p)
  if (index === 1) {
    const paragraph = document.createElement('p');
    paragraph.classList.add('text-base', 'global-text-grey-500', 'md:global-grow');
    paragraph.textContent = 'Best-in-class in vitro diagnostic mass spec solutions that are extremely easy to adopt and powerful enough to handle the everyday demands of the clinical lab.';
    textContainer.appendChild(paragraph);
  }
  // Create the learn more link container
  const linkContainer = document.createElement('div');
  linkContainer.classList.add('global-mt-12', 'md:global-mt-16');

  // Create the "Learn more" link (a)
  if (index === 3) {
    const link = document.createElement('a');
    link.href = col.innerText || '#';
    link.target = '_self';
    link.classList.add('global-transition', 'global-duration-300', 'global-group', 'focus-visible:global-outline', 'focus-visible:global-outline-2', 'focus-visible:global-outline-offset-2', 'focus-visible:global-outline-blue-700', 'global-inline-flex', 'global-w-fit', 'global-items-center', 'global-text-blue-700', 'hover:global-text-blue-800');
    link.setAttribute('data-di-id', 'di-id-faa5f43b-28ff6de1');

    // Create the inner span inside the link
    const span = document.createElement('span');
    span.classList.add('global-whitespace-normal', 'global-text-left');
    span.textContent = 'Learn more';

    // Create the absolute bottom bar for the link
    const bottomBar = document.createElement('span');
    bottomBar.classList.add('global-absolute', 'global-left-0', 'global-bottom-0', 'global-block', 'global-w-full', 'group-hover:global-left-[100%]', 'global-transition-all', 'global-duration-500', 'motion-reduce:global-transition-none', 'global-h-1', 'global-bg-blue-700', 'hover:global-bg-blue-800');

    // Create the arrow icon inside the link
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '16');
    svg.setAttribute('height', '14');
    svg.setAttribute('viewBox', '0 0 16 14');
    svg.setAttribute('fill', 'none');
    svg.classList.add('global-transition-all', 'global-duration-500', 'motion-reduce:global-transition-none', 'global-block', 'global-ml-8', 'group-hover:global-ml-12', 'global-flex-shrink-0');

    // Create the arrow path elements inside the svg
    const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path1.setAttribute('d', 'M0 7L15 7');
    path1.setAttribute('stroke', 'currentColor');

    const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path2.setAttribute('d', 'M9 1L15 7L9 13');
    path2.setAttribute('stroke', 'currentColor');

    // Append the path elements to the svg
    svg.appendChild(path1);
    svg.appendChild(path2);

    // Append the elements in correct order
    link.appendChild(span);
    link.appendChild(bottomBar);
    link.appendChild(svg);
    linkContainer.appendChild(link);
    textContainer.appendChild(linkContainer);
  }
  flexContainer.appendChild(textContainer);
  tabContent.appendChild(flexContainer);
  container.appendChild(tabContent);
  tabsContainer.appendChild(container);
}

export default function decorate(block) {
  const container = document.createElement('div');
  container.classList.add('global-container', 'global-hidden', 'md:global-flex', 'global-flex-row', 'global-w-full', 'global-items-stretch', 'global-flex-wrap');

  // Create a container for the tabs
  const tabsContainer = document.createElement('div');
  tabsContainer.setAttribute('id', 'tab-container-main');
  const tabsDiv = document.createElement('div');
  tabsDiv.classList.add('global-container', 'global-hidden', 'md:global-flex', 'global-flex-row', 'global-w-full', 'global-items-stretch', 'global-flex-wrap');

  // Iterate over the rows inside the block

  [...block.children].forEach((row, rowindex) => {
    const gridContainer = document.createElement('div');
    gridContainer.classList.add('global-grid', 'global-container', 'global-transition-all', 'global-duration-300', 'global-transition-ease-in-out', 'md:global-transition-none');
    // Create the tab content div
    const tabContent = document.createElement('div');
    tabContent.id = `tabContent${rowindex}`;
    tabContent.classList.add('table-content', 'global-overflow-hidden', 'global-block');
    if (rowindex === 0) {
      tabContent.classList.add('global-overflow-hidden', 'global-block');
    } else {
      tabContent.classList.add('global-overflow-hidden', 'global-hidden');
    }
    // Create the inner flex container
    const flexContainer = document.createElement('div');
    flexContainer.classList.add('global-my-32', 'md:global-mb-0', 'global-flex', 'global-flex-col', 'md:global-flex-row-reverse');

    const textContainer = document.createElement('div');
    textContainer.classList.add('md:global-w-[35%]', 'md:global-mr-32');
    const tabDiv = document.createElement('div');
    tabDiv.setAttribute('id', rowindex);
    tabDiv.classList.add('tabdivitem', 'global-h-auto', 'global-border-b-2', 'global-mr-4', 'global-hidden', 'md:global-block');

    // Create the button element
    const button = document.createElement('button');
    button.classList.add('tabButton', 'global-text-left', 'text-base-bolder', 'global-w-160', 'hover:global-text-blue-700', 'focus-visible:global-outline', 'focus-visible:global-outline-2', 'focus-visible:global-outline-offset-[-2px]', 'focus-visible:global-outline-blue-700');
    button.setAttribute('aria-controls', 'tabContent0');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('data-di-id', 'di-id-694d4800-c78e23f8');
    if (rowindex === 0) {
      tabDiv.classList.add('global-border-blue-700');
      button.classList.add('global-text-blue-700');
    } else {
      tabDiv.classList.add('global-border-grey-100');
      button.classList.add('global-text-grey-900');
    }
    // Append the button to the tab div
    tabDiv.appendChild(button);

    // Append the tab div to the container
    tabsDiv.appendChild(tabDiv);
    tabsContainer.appendChild(tabsDiv);

    // Find the parent element where this structure should be inserted
    const parentElement = document.getElementsByClassName('tabs block')[0];
    parentElement.appendChild(tabsContainer);

    // Add functionality to toggle the active tab (you can use this to toggle classes)
    button.addEventListener('click', () => {
      // Change the text color and border when clicked
      const tabButtons = document.querySelectorAll('.tabButton');
      tabButtons.forEach((element) => {
        element.classList.remove('global-text-blue-700');
      });
      const tabdivitem = document.querySelectorAll('.tabdivitem');
      tabdivitem.forEach((element) => {
        element.classList.remove('global-border-blue-700');
        const id = tabDiv.getAttribute('id');
        const tableContentElements = document.querySelectorAll('.table-content');
        tableContentElements.forEach((tableElement) => {
          tableElement.classList.remove('global-block');
          tableElement.classList.add('global-hidden');
        });
        const ele = document.getElementById(`tabContent${id}`);
        ele.classList.remove('global-hidden');
        ele.classList.add('global-block');
      });
      const isActive = button.classList.contains('global-text-blue-700');

      if (isActive) {
        button.classList.remove('global-text-blue-700');
        button.classList.add('global-text-grey-900');
        tabDiv.classList.remove('global-border-blue-700');
        tabDiv.classList.add('global-border-grey-100');
      } else {
        button.classList.remove('global-text-grey-900');
        button.classList.add('global-text-blue-700');
        tabDiv.classList.remove('global-border-grey-100');
        tabDiv.classList.add('global-border-blue-700');
      }
    });
    // Iterate over columns inside each row
    [...row.children].forEach((col, index) => {
      if (index === 0) {
        button.innerHTML = `<span class="global-line-clamp-2 global-m-12">${col.innerText}</span>`;
      }
      addTabData(
        col,
        index,
        rowindex,
        tabsContainer,
        gridContainer,
        tabContent,
        flexContainer,
        textContainer, // <-- Trailing comma added here
      );
    });
  });
  // Append tabsdiv
  tabsContainer.insertBefore(tabsDiv, tabsContainer.firstChild);
  block.innerHTML = '';
  block.append(tabsContainer);
}
// end
