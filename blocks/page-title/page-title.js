export default function decorate(block) {
  // add main class to parent block
  block.classList.add('page-title-container');

  // select the child and specific classes
  const imageDiv = block.children[0];
  const textDiv = block.children[1];

  if (imageDiv) {
    imageDiv.classList.add('page-title-image');
  }

  // create a h1 element and add it to text div

  if (textDiv) {
    textDiv.classList.add('page-title-text');
    const heading = document.createElement('h1');
    heading.textContent = textDiv.textContent;
    textDiv.textContent = '';
    // clear the existing text
    textDiv.appendChild(heading);
  }
}
