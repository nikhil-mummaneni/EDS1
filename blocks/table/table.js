import {
  table, thead, tbody, th, tr, td,
} from '../../scripts/dom-builder.js';

function buildCell(rowIndex) {
  const cell = rowIndex ? td({ class: 'break-words content-baseline text-base text-black py-2 pr-2' }) : th({ class: 'text-left pt-2 pb-1 text-xs text-[#65797c]' });
  if (!rowIndex) cell.setAttribute('scope', 'col');
  return cell;
}

export default async function decorate(block) {

}
