import {
  div,
} from '../../scripts/dom-builder.js';

export default function decorate(block) {
  const childrenDivs = block.children;
  const header = document.createElement('div');
  header.classList.add('header-bar');
  const logoDiv = div({
    class: 'logo',
  });
  const nav = document.createElement('div');
  nav.classList.add('navLinks-bar');

  Array.from(childrenDivs).forEach((childDiv, index) => { // Renamed to childDiv
    const picture = childDiv.querySelector('picture');
    const buttonContainer = childDiv.querySelector('.button-container');
    const img = picture ? picture.querySelector('img') : null;
    const cta = buttonContainer ? buttonContainer.querySelector('a.button') : null;

    if (cta) {
      const a = document.createElement('a');
      const span = document.createElement('span');
      a.href = cta.href;
      a.target = '_blank';
      span.textContent = cta.textContent;

      if (img) {
        const newimg = document.createElement('img');
        newimg.src = img.src;
        newimg.alt = img.alt;
        if (index === 0) {
          const logoLink = document.createElement('a');
          logoLink.href = cta.href;
          logoLink.target = '_blank';
          logoLink.appendChild(newimg);
          logoDiv.appendChild(logoLink);
        } else {
          a.appendChild(newimg);
        }
      }

      if (index >= 1) {
        a.appendChild(span);
        nav.appendChild(a);
      }
    }
  });

  const anchorTags = nav.querySelectorAll('a');
  if (anchorTags.length > 0) {
    const lastAnchor = anchorTags[anchorTags.length - 1];
    lastAnchor.classList.add('last-item');
  }

  header.appendChild(logoDiv);
  header.appendChild(nav);
  block.parentElement.style.maxWidth = '100%';
  block.parentElement.style.padding = '0';
  block.textContent = '';
  block.append(header);
}