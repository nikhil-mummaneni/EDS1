import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  // Create an unordered list to hold cards
  const ul = document.createElement('ul');
  ul.className = 'cards-list';

  // Iterate over each child element in the block
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    li.className = 'cards-item'; // Add a specific class to each item
    while (row.firstElementChild) li.append(row.firstElementChild);

    [...li.children].forEach((div) => {
      // Add class for image container
      if (div.children.length === 1 && div.querySelector('picture')) {
        div.className = 'cards-card-image tw-mb-16 md:tw-mb-20';
      } else {
        // Add class for content body
        div.className = 'cards-card-body';

        // Remove any button inside
        const button = div.querySelector('button');
        if (button) {
          button.remove();
        }

        // Create and add "Learn More" CTA link
        const cta = document.createElement('a');
        cta.className = 'cta';
        cta.href = '#';
        cta.textContent = 'Learn More';
        div.append(cta);
      }
    });
    ul.append(li);
  });

  // Optimize picture elements for responsive loading
  ul.querySelectorAll('picture > img').forEach((img) =>
    img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]))
  );

  block.textContent = '';
  block.append(ul);
  block.classList.add("tw");  // Add a class to the block for global styling
}
import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  // Create an unordered list to hold cards
  const ul = document.createElement('ul');
  ul.className = 'cards-list';

  // Iterate over each child element in the block
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    li.className = 'cards-item'; // Add a specific class to each item
    while (row.firstElementChild) li.append(row.firstElementChild);

    [...li.children].forEach((div) => {
      // Add class for image container
      if (div.children.length === 1 && div.querySelector('picture')) {
        div.className = 'cards-card-image tw-mb-16 md:tw-mb-20';
      } else {
        // Add class for content body
        div.className = 'cards-card-body';

        // Remove any button inside
        const button = div.querySelector('button');
        if (button) {
          button.remove();
        }

        // Create and add "Learn More" CTA link
        const cta = document.createElement('a');
        cta.className = 'cta';
        cta.href = '#';
        cta.textContent = 'Learn More';
        div.append(cta);
      }
    });
    ul.append(li);
  });

  // Optimize picture elements for responsive loading
  ul.querySelectorAll('picture > img').forEach((img) =>
    img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]))
  );

  block.textContent = '';
  block.append(ul);
  block.classList.add("tw");  // Add a class to the block for global styling
}
