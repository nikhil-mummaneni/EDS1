import { div } from '../../scripts/dom-builder.js';

export default function decorate(block) {
  if (!block) return; // Check if block exists

  const childrenDivs = block.children;
  const header = document.createElement('div');
  header.classList.add('header-bar');
  const logoDiv = div({ class: 'logo' });
  const nav = document.createElement('div');
  nav.classList.add('navLinks-bar');

  Array.from(childrenDivs).forEach((childDiv, index) => {
    if (!childDiv) return; // Check if childDiv exists

    const picture = childDiv.querySelector('picture');
    const buttonContainer = childDiv.querySelector('.button-container');
    const img = picture ? picture.querySelector('img') : null;
    const cta = buttonContainer ? buttonContainer.querySelector('a.button') : null;

    if (cta) {
      const linkElement = document.createElement('a');
      const spanElement = document.createElement('span');
      linkElement.href = cta.href;
      linkElement.target = '_blank';
      spanElement.textContent = cta.textContent;

      if (img) {
        const newImg = document.createElement('img');
        newImg.src = img.src;
        newImg.alt = img.alt || 'Logo'; // Add alt attribute for accessibility

        if (index === 0) {
          const logoLink = document.createElement('a');
          logoLink.href = cta.href;
          logoLink.target = '_blank';
          logoLink.appendChild(newImg);
          logoDiv.appendChild(logoLink);
        } else {
          linkElement.appendChild(newImg);
        }
      }

      if (index >= 1) {
        linkElement.appendChild(spanElement);
        nav.appendChild(linkElement);
      }
    }
  });

  const anchorTags = nav.querySelectorAll('a');
  if (anchorTags.length > 0) {
    const lastAnchor = anchorTags[anchorTags.length - 1];
    lastAnchor.classList.add('last-item');
  }

  // Only append nav if it has child elements
  if (nav.children.length > 0) {
    header.appendChild(logoDiv);
    header.appendChild(nav);
  }

  // Styling adjustments for parent element
  block.parentElement.style.maxWidth = '100%';
  block.parentElement.style.padding = '0';

  // Clear only specific children or hide content during rendering
  Array.from(block.children).forEach((child) => {
    child.style.display = 'none'; // Hide each child element for rendering
  });

  // Append the new header content
  block.append(header);
}
