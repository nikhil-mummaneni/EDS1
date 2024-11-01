function transformSciexColumnsToCards() {
    // Select the wrapper that contains all items
    const sciexWrapper = document.querySelector('.sciex-columns-wrapper');
    if (!sciexWrapper) return; // Exit if wrapper not found

    // Create new structure wrapper
    const newWrapper = document.createElement('div');
    newWrapper.classList.add('cards-wrapper');

    const blockDiv = document.createElement('div');
    blockDiv.classList.add('cards', 'block', 'tw');
    blockDiv.setAttribute('data-block-name', 'cards');
    blockDiv.setAttribute('data-block-status', 'loaded');

    // Create unordered list to hold card items and apply grid layout
    const ul = document.createElement('ul');
    ul.classList.add('cards-list');

    // Select all individual cards
    const cards = sciexWrapper.querySelectorAll('[data-aue-model="card"]');

    cards.forEach((card) => {
        // Create list item for each card
        const li = document.createElement('li');
        li.classList.add('cards-item');

        // Extract image information
        const imgElement = card.querySelector('img');
        const imgSrc = imgElement ? imgElement.src : '';
        const imgAlt = imgElement ? imgElement.alt : '';

        // Create image container div
        const imageDiv = document.createElement('div');
        imageDiv.classList.add('cards-card-image');

        // Create picture element with source and img tags
        const picture = document.createElement('picture');

        const source = document.createElement('source');
        source.type = 'image/webp';
        source.srcset = `${imgSrc}?width=750&format=webply&optimize=medium`;
        picture.appendChild(source);

        const img = document.createElement('img');
        img.loading = 'lazy';
        img.alt = imgAlt;
        img.src = `${imgSrc}?width=750&format=png&optimize=medium`;
        picture.appendChild(img);

        imageDiv.appendChild(picture);

        // Create body container div
        const bodyDiv = document.createElement('div');
        bodyDiv.classList.add('cards-card-body');

        // Extract and create heading element
        const heading = card.querySelector('h3');
        const headingText = heading ? heading.innerText : '';
        const h3 = document.createElement('h3');
        h3.id = headingText.toLowerCase().replace(/\s+/g, '-');
        const strong = document.createElement('strong');
        strong.innerText = headingText;
        h3.appendChild(strong);

        // Extract and create paragraph element
        const paragraph = card.querySelector('p');
        const paragraphText = paragraph ? paragraph.innerText : '';
        const p = document.createElement('p');
        p.innerText = paragraphText;

        // Create CTA link
        const ctaLink = document.createElement('a');
        ctaLink.classList.add('cta');
        ctaLink.href = '#'; // Modify as needed
        ctaLink.innerText = 'Learn More';

        // Append heading, paragraph, and CTA to bodyDiv
        bodyDiv.appendChild(h3);
        bodyDiv.appendChild(p);
        bodyDiv.appendChild(ctaLink);

        // Append imageDiv and bodyDiv to list item (li)
        li.appendChild(imageDiv);
        li.appendChild(bodyDiv);

        // Append li to ul
        ul.appendChild(li);
    });

    // Append ul to blockDiv, and blockDiv to newWrapper
    blockDiv.appendChild(ul);
    newWrapper.appendChild(blockDiv);

    // Replace old wrapper with new structure
    sciexWrapper.replaceWith(newWrapper);
}

// Call the function to apply the transformation
transformSciexColumnsToCards();
