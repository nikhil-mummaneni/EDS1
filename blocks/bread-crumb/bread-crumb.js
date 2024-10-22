import { decorateIcons, getMetadata } from '../../scripts/aem.js';
import {
  div, nav, ol, li, a, span,
} from '../../scripts/dom-builder.js';

// Breadcrumb functionality implementation
export default function decorate(block) {
  const pathname = window.location.pathname.split('/').slice(1);
  const title = getMetadata('og:title');
  const { length } = pathname;

  const breadcrumbOl = ol({ class: 'breadcrumb-list' });

  // Home icon and link
  const homeSvg = span({ class: 'home-icon' });
  const homeAnchor = a({
    class: 'home-link',
    href: '/',
  }, homeSvg);
  const homeLi = li({ class: 'breadcrumb-item' }, homeAnchor);
  breadcrumbOl.appendChild(homeLi);

  let url = '';
  for (let i = 0; i < length; i += 1) {
    url = `${url}/${pathname[i]}`;
    const pathnameToUpperCase = pathname[i].charAt(0).toUpperCase();
    const linkText = (i === length - 1) ? title : pathnameToUpperCase + pathname[i].slice(1);
    const formattedLinkText = linkText.toLowerCase().replace(/\b[a-z]/g, (letter) => letter.toUpperCase());

    // Create breadcrumb link
    const breadcrumbLink = a({
      class: 'breadcrumb-link',
      href: url,
    }, formattedLinkText);
    const breadcrumbLi = li({ class: 'breadcrumb-item' }, breadcrumbLink);

    // Add chevron if it's not the last breadcrumb
    if (i < length - 1) {
      const separatorSvg = span({ class: 'icon icon-chevron' });
      breadcrumbLi.appendChild(separatorSvg);
    }

    breadcrumbOl.appendChild(breadcrumbLi);
  }

  // Last breadcrumb link without chevron
  const lastBreadcrumbLink = a({
    class: 'breadcrumb-link last',
    href: url,
  }, formattedLinkText);
  const lastBreadcrumbLi = li({ class: 'breadcrumb-item' }, lastBreadcrumbLink);
  breadcrumbOl.appendChild(lastBreadcrumbLi);

  const breadcrumbNav = nav(
    { class: 'breadcrumb-nav' },
    div({ class: 'breadcrumb-container' }, breadcrumbOl),
  );

  block.classList.add('custom-breadcrumb');
  block.appendChild(breadcrumbNav);
}
