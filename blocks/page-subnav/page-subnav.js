import {} from '../../scripts/aem.js';
import {} from '../../scripts/scripts.js';

// export the default function
export default function decorate(block) {
  // adding classes to subnav div
  const subnavList = block.querySelector('ul');
  if (subnavList) {
    subnavList.classList.add('subnav-list');

    subnavList.list.querySelectorAll('li').forEach((item) => {
      item.classList.add('subnav-item');
    });
  }

  // adding additional classes as needed
  block.classList.add('page-subnav-container');
}
