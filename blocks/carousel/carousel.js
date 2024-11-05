import {} from '../../scripts/aem.js';

export default function decorate(block) {
  if (!block) return;

  const container = document.createElement('div');
  container.className = 'carousel-container';

  const headingRow = block.children[0];

  if (headingRow && headingRow.textContent && headingRow.textContent.trim()) {
    const heading = document.createElement('h1');
    heading.className = 'carousel-heading';

    heading.textContent = headingRow.textContent.trim();
    container.appendChild(heading);
  }

  const contentDiv = document.createElement('div');
  contentDiv.className = 'carousel-content';

  Array.from(block.children).slice(1).forEach((row) => {
    if (!row || row.children.length < 2) { return; }

    const cardDiv = document.createElement('div');
    cardDiv.className = 'carousel-item';

    const imgCell = row.children[0];
    if (imgCell) {
      const img = imgCell.querySelector('img');
      if (img && img.src) {
        const cardImg = document.createElement('img');
        cardImg.src = img.src;
        cardImg.alt = img.alt || 'image';
        cardImg.className = 'carousel-image';

        cardDiv.appendChild(cardImg);
      }
    }

    const textCell = row.children[1];

    if (textCell) {
      const titleText = textCell.querySelector('h4');
      const descriptionText = textCell.querySelector('p');
      const linkElement = textCell.querySelector('a');

      if (titleText && titleText.textContent && titleText.textContent.trim()) {
        const cardTitle = document.createElement('h4');
        cardTitle.textContent = titleText.textContent.trim();

        cardTitle.className = 'carousel-text-heading';
        cardDiv.appendChild(cardTitle);
      }
      if (descriptionText && descriptionText.textContent && descriptionText.textContent.trim()) {
        const cardDescription = document.createElement('p');
        cardDescription.textContent = descriptionText.textContent.trim();
        cardDescription.className = 'carousel-text-description';

        cardDiv.appendChild(cardDescription);
      }

      if (linkElement && linkElement.href) {
        const learnMoreLink = document.createElement('a');
        learnMoreLink.href = linkElement.href;

        learnMoreLink.innerHTML = 'Learn More &#8594';

        learnMoreLink.className = 'carousel-learn-more';
        cardDiv.appendChild(learnMoreLink);
      }

      contentDiv.appendChild(cardDiv);
    }
  });

  container.appendChild(contentDiv);

  block.innerHTML = '';

  block.appendChild(container);
}
