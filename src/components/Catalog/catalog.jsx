import CatalogItems from './CatalogItems/catalogItems';
import Categories from './Categories/categories';
import MoreItems from './MoreItems/moreItems';
import SearchForm from './SearchForm/searchForm';
import './catalog.css';

function Catalog(isSearchForm) {
  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      {isSearchForm && <SearchForm />}
      <Categories />
      <CatalogItems />
      <MoreItems />
    </section>
  )
}

export default Catalog;