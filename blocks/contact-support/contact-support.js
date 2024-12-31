export default function decorate(block) {
  // add main class to parent block
  block.classList.add('page-title-container-santosh');

  // select the child and specific classes
 

  if (textDiv) {
    textDiv.classList.add('page-title-text');
    const heading = document.createElement('h1');
    heading.textContent = textDiv.textContent;
    textDiv.textContent = '';
    // clear the existing text
    textDiv.appendChild(heading);
  }
}