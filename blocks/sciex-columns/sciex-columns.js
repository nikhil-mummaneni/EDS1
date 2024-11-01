import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  // Create an unordered list to hold card items
  const ul = document.createElement('ul');
  ul.classList.add('cards-list');

  // Iterate over each child row of the block and transform it into a card item
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    li.classList.add('cards-item');

    // Move each child of the row into the list item (li)
    while (row.firstElementChild) {
      li.append(row.firstElementChild);
    }

    // Apply classes to differentiate between image and body content
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) {
        // Image container
        div.className = 'cards-card-image tw-mb-16 md:tw-mb-20';
      } else {
        // Body container
        div.className = 'cards-card-body';

        // Remove any existing button and add CTA link
        const button = div.querySelector('button');
        if (button) {
          button.remove();
        }

        const cta = document.createElement('a');
        cta.className = 'cta';
        cta.href = '#';
        cta.textContent = 'Learn More';
        div.append(cta);
      }
    });

    // Append the list item to the unordered list
    ul.append(li);
  });

  // Optimize all images in the cards
  ul.querySelectorAll('picture > img').forEach((img) => {
    const optimizedPicture = createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]);
    img.closest('picture').replaceWith(optimizedPicture);
  });

  // Clear the original block content and append the newly created list
  block.textContent = '';
  block.append(ul);

  // Add any additional classes to the block if necessary
  block.classList.add("tw");
}
