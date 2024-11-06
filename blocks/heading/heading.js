export default function decorate(block) {
  // create the heading element
  const heading = document.createElement('h1');

  // add class
  heading.classList.add('heading-style');

  // clear any existing content in the block and append the heading
  block.innerHTML = '';

  block.appendChild(heading);
}
