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

        // Find the anchor tag inside rowElement
        const anchorTag = rowElement.querySelector('a');

        // If an anchor tag exists, append it to card-body
        if (anchorTag) {
          const newLink = document.createElement('a');
          newLink.className = 'cta arrow-link'; // Combine classes for styling
          newLink.href = anchorTag.href; // Use the href from the existing anchor
          newLink.textContent = anchorTag.textContent || 'Learn More'; // Default text if none exists

          // Add additional elements
          const horizontalLine = document.createElement('div');
          horizontalLine.className = 'horizontal-line';
          horizontalLine.style.borderTop = '1px solid #ccc';
          horizontalLine.style.margin = '10px 0';

          div.append(horizontalLine, newLink);
        }
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
