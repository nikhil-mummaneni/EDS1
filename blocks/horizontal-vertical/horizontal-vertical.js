import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(blockElement) {
  // Create the main unordered list element
  const ul = document.createElement('ul');
  ul.className = 'card-list'; // Optional: add class for styling

  // Loop through each child of the blockElement
  [...blockElement.children].forEach((rowElement) => {
    // Check if rowElement has the class title-description
    if (rowElement.classList.contains('title-description')) {
      // Directly append to blockElement if it has title-description class
      blockElement.append(rowElement);
      return; // Skip further processing for this element
    }

    const li = document.createElement('li');
    li.className = 'card'; // Apply card class

    // Move instrumentation from rowElement to li
    moveInstrumentation(rowElement, li);

    // Append all child elements of rowElement to li
    while (rowElement.firstElementChild) {
      li.append(rowElement.firstElementChild);
    }

    // Set classes for child divs based on their content
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) {
        div.className = 'card-image';
      } else {
        div.className = 'card-body';

        // Remove button if it exists
        const button = div.querySelector('button');
        if (button) {
          button.remove();
        }

        // Add additional elements
        const horizontalLine = document.createElement('div');
        horizontalLine.className = 'horizontal-line';
        horizontalLine.style.borderTop = '1px solid #ccc';
        horizontalLine.style.margin = '10px 0';

        const link = document.createElement('a');
        link.className = 'cta arrow-link'; // Combine classes for styling
        link.href = '#';
        link.textContent = 'Learn More';

        div.append(horizontalLine, link);
      }
    });

    // Append li to the ul
    ul.append(li);
  });

  // Replace images with optimized versions
  ul.querySelectorAll('picture > img').forEach((img) => {
    const optimizedPic = createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]);
    moveInstrumentation(img, optimizedPic.querySelector('img'));
    img.closest('picture').replaceWith(optimizedPic);
  });

  // Clear the blockElement and append the new ul
  blockElement.textContent = '';
  blockElement.append(ul);
}
