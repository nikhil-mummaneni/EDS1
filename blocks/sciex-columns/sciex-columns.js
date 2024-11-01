import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(blockElement) {
  const ul = document.createElement('ul');
  ul.className = 'cards-list';

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

        // Prepare a single container for all anchors
        const anchorContainerDiv = document.createElement('div');
        anchorContainerDiv.className = 'anchor-container';
        anchorContainerDiv.style.display = 'flex'; // Ensure anchors are in a line

        // Move existing buttons and links to the anchor container
        const button = div.querySelector('button');
        if (button) {
          button.remove();
        }

        const anchors = div.querySelectorAll('a');
        anchors.forEach((anchor) => {
          anchor.classList.add('cta');
          anchorContainerDiv.append(anchor); // Append all anchors to the container
        });

        // Append the anchor container to the body div
        div.append(anchorContainerDiv);
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
