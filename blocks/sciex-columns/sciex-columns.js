import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(blockElement) {
  const ul = document.createElement('ul');
  ul.className = 'card-list';

  // Iterate over each child row of the blockElement to create cards
  [...blockElement.children].forEach((rowElement) => {
    const li = document.createElement('li');
    li.className = 'card';

    // Move any instrumentation attributes from rowElement to li
    moveInstrumentation(rowElement, li);

    // Move each child of rowElement into the list item (li)
    while (rowElement.firstElementChild) {
      li.append(rowElement.firstElementChild);
    }

    // Apply classes to differentiate between image and body content
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) {
        // Image container
        div.className = 'card-image';
      } else {
        // Body container
        div.className = 'card-body';

        // Remove any existing button and add CTA link if present
        const button = div.querySelector('button');
        if (button) {
          button.remove();
        }

        const anchor = div.querySelector('a');
        if (anchor) {
          const anchorContainerDiv = document.createElement('div');
          anchorContainerDiv.className = 'anchor-container';

          const anchorText = anchor.textContent || 'Learn More';
          const anchorHref = anchor.href || '#';

          anchor.classList.add('cta', 'arrow-link');
          anchor.href = anchorHref;
          anchor.textContent = anchorText;
          anchorContainerDiv.append(anchor);
          div.append(anchorContainerDiv);
        }
      }
    });

    ul.append(li);
  });

  // Clear the original block content and append the newly created list
  blockElement.textContent = '';
  blockElement.append(ul);

  // Replace images with optimized versions
  ul.querySelectorAll('picture > img').forEach((img) => {
    const optimizedPic = createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]);
    moveInstrumentation(img, optimizedPic.querySelector('img'));
    img.closest('picture').replaceWith(optimizedPic);
  });
}
