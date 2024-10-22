import {
  div, nav, ul, li, a,
} from '../../scripts/dom-builder.js';
// breadcrumb functionality implementation
export default function decorate(block) {
 console.log("inside breadcrumb");
  const path = window.location.pathname.split('/').slice(1);
  console.log(path);
}
