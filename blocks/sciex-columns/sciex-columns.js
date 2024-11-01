import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
console.log("inside");
  // Create a <ul> element to hold the card items
  const ul = document.createElement('ul');

  // Iterate through the block children to create <li> elements
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    while (row.firstElementChild) li.append(row.firstElementChild);

    [...li.children].forEach((div) => {
      // Apply styles and classes to images
      if (div.children.length === 1 && div.querySelector('picture')) {
        div.className = 'cards-card-image tw-mb-16 md:tw-mb-20';
      } else {
        div.className = 'cards-card-body';

        const button = div.querySelector('button');
        if (button) {
          button.remove(); // Remove existing button if present
        }

        // Create a call-to-action link
        const cta = document.createElement('a');
        cta.className = 'cta';
        cta.href = '#';
        cta.textContent = 'Learn More';
        div.append(cta);
      }
    });

    // Append the <li> to the <ul>
    ul.append(li);
  });

  // Optimize images
  ul.querySelectorAll('picture > img').forEach((img) =>
    img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));

  // Clear the block and append the new list
  block.textContent = '';
  block.append(ul);
  block.classList.add("tw");
}
