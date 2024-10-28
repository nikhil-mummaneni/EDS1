import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(blockElement) {
  const ul = document.createElement('ul');
  ul.className = 'card-list';

  [...blockElement.children].forEach((rowElement) => {

    const li = document.createElement('li');
    li.className = 'card';

    moveInstrumentation(rowElement, li);
    while (rowElement.firstElementChild) {
      li.append(rowElement.firstElementChild);
    }

    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) {
        div.className = 'card-image';
      } else {
        div.className = 'card-body';

        const button = div.querySelector('button');
        if (button) {
          button.remove();
        }
        const anchor = div.querySelector('a');

        if (anchor) {
          const anchorContainerDiv = document.createElement('div');
          anchorContainerDiv.className = 'anchor-container'; // Assign a class to the new div

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

  blockElement.textContent = '';
  blockElement.append(titleDescriptionDiv, ul);

  // Replace images with optimized versions
  ul.querySelectorAll('picture > img').forEach((img) => {
    const optimizedPic = createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]);
    moveInstrumentation(img, optimizedPic.querySelector('img'));
    img.closest('picture').replaceWith(optimizedPic);
  });
}
