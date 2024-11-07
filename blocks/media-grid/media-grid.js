import {
  div,
} from '../../scripts/dom-builder.js';

export default function decorate(block) {
  const sectionDiv = document.createElement('section');
  sectionDiv.className = 'global-pt-32 md:global-pt-48 global-pb-32 md:global-pb-48';
  const parentDiv = div({ class: 'global-container' });
  sectionDiv.appendChild(parentDiv);
  const childDiv = div({ class: 'global-flex global-flex-col md:global-flex-row md:global-flex-wrap' });
  parentDiv.appendChild(childDiv);

  const childrenDivs = block.children;
  Array.from(childrenDivs).forEach((child) => {
    const imageDiv = div({ class: 'global-w-full md:global-w-1/2 global-flex global-flex-col media-grid-item  md:global-pt-0 false' });
    const anchorTag = document.createElement('a');
    const imageDiv1 = div({ class: 'global-w-full global-relative global-overflow-hidden global-aspect-[8/5]' });

    if (!child) return; // Check if childDiv exists
    const container = child.querySelector('div');
    const image = container.querySelector('picture > img');
    const imageTag = document.createElement('img');
    imageTag.className = 'global-transition-all global-duration-500 global-inset-0 global-top-0 global-left-0 global-w-full global-h-full global-object-cover hover:global-scale-[1.05] motion-reduce:hover:global-transform-none';
    imageTag.src = image.src;
    imageDiv1.appendChild(imageTag);
    if (child.getElementsByTagName('div').length > 1) {
      const link = child.getElementsByTagName('div')[1].querySelector('p > a');
      if (link != null) {
        anchorTag.href = link.href;
        anchorTag.target = '_blank';
      }
    }
    anchorTag.appendChild(imageDiv1);
    imageDiv.appendChild(anchorTag);
    childDiv.appendChild(imageDiv);
  });

  // Styling adjustments for parent element
  block.parentElement.style.maxWidth = '100%';
  block.parentElement.style.padding = '0';

  // Clear only specific children or hide content during rendering
  Array.from(block.children).forEach((child) => {
    child.style.display = 'none'; // Hide each child element for rendering
  });
  block.append(sectionDiv);
}
