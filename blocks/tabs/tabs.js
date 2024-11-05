import {} from '../../scripts/aem.js'; 
import {} from '../../scripts/scripts.js'; 
export default function decorate(block) {
 
  if (!block) {
    console.error('Invalid block element.');
    return;
  }

  // Create a container for the tabs
  const tabsContainer = document.createElement('div');
  tabsContainer.classList.add('global-w-full', 'md:global-w-1/2', 'global-flex', 'global-flex-col', 'media-grid-item', 'global-pt-24', 'md:global-pt-32');
  tabsContainer.classList.add('global-justify-between');

  // Iterate over the rows inside the block
  [...block.children].forEach((row) => {
    // Create a new tabItem for each row
    const tabItem = document.createElement('div');
    tabItem.classList.add('tab-item');

    // Iterate over columns inside each row
    [...row.children].forEach((col) => {
      // Ensure col.name is defined
      if (!col.name) return;

      switch (col.name) {
        case 'tabhead':
          const tabHead = document.createElement('div');
          tabHead.classList.add('atomic-richtext-content', 'text-sm', 'global-text-grey-500', 'global-break-words', 'global-pb-12', 'md:global-pb-16');
          tabHead.innerText = col.value || col.label || ''; 
          tabItem.appendChild(tabHead);
          break;

        case 'linkurl':
          const link = document.createElement('a');
          link.href = col.value || '#'; 
          link.innerText = col.label || 'Link'; 
          tabItem.appendChild(link);
          break;

        case 'description':
          const description = document.createElement('div');
          description.classList.add('atomic-richtext-content', 'text-sm', 'global-text-grey-500', 'global-break-words', 'global-pt-12', 'md:global-pt-16');
          description.innerHTML = col.value || ''; 
          tabItem.appendChild(description);
          break;

        case 'image':
          if (col.value) {
            const img = document.createElement('img');
            img.classList.add('global-transition-all', 'global-duration-500', 'global-inset-0', 'global-top-0', 'global-left-0', 'global-w-full', 'global-h-full', 'global-object-cover');
            img.src = col.value;
            img.alt = col.alt || ''; 

            const imgWrapper = document.createElement('div');
            imgWrapper.classList.add('global-w-full', 'global-relative', 'global-overflow-hidden', 'global-aspect-[8/5]');
            imgWrapper.appendChild(img);

            tabItem.appendChild(imgWrapper);
          }
          break;

        default:
          console.warn(`Unknown column name: ${col.name}`);
          break;
      }
    });

    // Append the tab item to the tabs container
    tabsContainer.appendChild(tabItem);
  });

  // Append the tabs container to the body or block container
  document.body.appendChild(tabsContainer); // Or append to a specific parent container if needed
}
