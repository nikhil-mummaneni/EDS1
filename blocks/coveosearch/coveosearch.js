
export default function decorate(block) {
  block.textContent = '';
  console.log("coveo search", block);
  const ul = document.createElement('ul');
  ul.textContent = "Hello coveo"
  block.append(ul);
}
