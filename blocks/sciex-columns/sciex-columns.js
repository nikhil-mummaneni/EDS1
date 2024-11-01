import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(blockElement) {
  const ul = document.createElement('ul');
  ul.className = 'cards-list';

  // Iterate over each child row of the blockElement to create cards
  [...blockElement.children].forEach((rowElement) => {
    const li = document.createElement('li');
    li.className = 'cards-item';

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
        div.className = 'cards-card-image';
      } else {
        // Body container
        div.className = 'cards-card-body';
        const button = div.querySelector('button');
        if (button) {
          button.remove();
        }

        const anchors = div.querySelectorAll('a'); // Find all anchor tags
        if (anchors.length > 0) {
          const anchorContainerDiv = document.createElement('div');
          anchorContainerDiv.className = 'anchor-container';

          // Iterate over each anchor and append them to the container
          anchors.forEach((anchor) => {
            const anchorText = anchor.textContent || 'Learn More';
            const anchorHref = anchor.href || '#';

            anchor.classList.add('cta');
            anchor.href = anchorHref;
            anchor.textContent = anchorText;

            anchorContainerDiv.append(anchor); // Append anchor to the container
          });

          div.append(anchorContainerDiv); // Append the container to the card body
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
