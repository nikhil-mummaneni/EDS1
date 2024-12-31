/*export default function decorate(block) {
  // add main class to parent block
  block.classList.add('page-title-container-santosh');

  // select the child and specific classes
 

}
*/

export default function decorate(block) {
  // Add main class to the parent block
  block.classList.add('page-title-container-santosh');

  // Add the class to the first child of the block element
  const firstChild = block.firstElementChild; // Get the first child element
  if (firstChild) {
    firstChild.classList.add('page-title-container-santosh'); // Add the class to the first child
  }
}