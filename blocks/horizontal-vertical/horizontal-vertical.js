import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(blockElement) {
  // Create the main unordered list element
  const ul = document.createElement('ul');
  ul.className = 'card-list'; // Optional: add class for styling

  // Create a separate div for title-description items
  const titleDescriptionDiv = document.createElement('div');
  titleDescriptionDiv.className = 'title-description-container';

  // Loop through each child of the blockElement
  [...blockElement.children].forEach((rowElement) => {
    // Check if rowElement has the data-aue-model attribute with value title-description
    if (rowElement.dataset.aueModel === 'title-description') {
      // Append to the titleDescriptionDiv if it has data-aue-model="title-description"
      titleDescriptionDiv.append(rowElement);
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

        // Dynamically retrieve the existing anchor tag
        const existingAnchor = div.querySelector('a');

        // Create a new anchor tag if none exists
        const link = existingAnchor ? existingAnchor.cloneNode(true) : document.createElement('a');
        link.className = 'cta arrow-link'; // Combine classes for styling
        link.href = existingAnchor ? existingAnchor.href : '#'; // Use existing href if available
        link.textContent = existingAnchor ? existingAnchor.textContent : 'Learn More'; // Use existing text if available

        div.append(horizontalLine, link);
      }
    });

    // Append li to the ul
    ul.append(li);
  });

  // Clear the blockElement and append the new ul and titleDescriptionDiv
  blockElement.textContent = '';
  blockElement.append(titleDescriptionDiv, ul);

  // Replace images with optimized versions
  ul.querySelectorAll('picture > img').forEach((img) => {
    const optimizedPic = createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]);
    moveInstrumentation(img, optimizedPic.querySelector('img'));
    img.closest('picture').replaceWith(optimizedPic);
  });
}
