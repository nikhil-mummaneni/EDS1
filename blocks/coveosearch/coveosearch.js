
import {} from '../../scripts/aem.js';
import { searchEngine } from './engine';
import { renderSearchBox } from './components/renderSearchBox';
import { renderSearchResults } from './components/searchResult';
import { renderSourceFacet, renderFiletypeFacet, renderPagetypeFacet} from './components/categoryFacets'
import { renderPagination } from './components/pagination'
import { renderQuerySummary } from './components/querySummary'
import { renderSorting } from './components/sorting'
async function initializeSearchEngine() {
  try {
    renderSearchBox();
    renderSorting();
    searchEngine.executeFirstSearch();
    searchEngine.subscribe(() => {
      renderSearchResults();
      renderQuerySummary();
      renderSourceFacet();
      renderFiletypeFacet();
      renderPagetypeFacet();
      renderPagination();
    });

    await searchEngine.executeFirstSearch().catch((error) => {
      console.error('Error executing the first search:', error);
    });

  } catch (error) {
    console.error('Error initializing search engine:', error);
  }
}

export default function coveoSearch() {
  initializeSearchEngine();
}
