import {
    div,
    span,
  } from '../../scripts/dom-builder.js';

export default function decorate(block) {
   
    debugger;

    console.log(block);
    block.textContent = '';
    block.classList.add('tw');
  }