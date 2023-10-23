function fetchData(path, categoryId = '', offset = '', searchQuery = '', method = 'GET', body = {}) {
  const url = new URL(`${import.meta.env.VITE_BASE_URL}/api/`);
  const headers = {
    'Content-Type': 'application/json',
  };

  url.pathname += path;
  if (offset !== '') url.searchParams.set('offset', offset);
  if (categoryId !== '') url.searchParams.set('categoryId', categoryId);
  if (searchQuery !== '')
    url.searchParams.set('q', searchQuery);

  return async () => {
    const response = await fetch(url, {
      method,
      body: method === 'POST' ? JSON.stringify(body) : null,
      headers,
    });

    if (!response.ok) throw new Error(response.statusText);

    const data = await response.json();
    return data;
  };
}

const getTopSales = fetchData('top-sales');
const getCategoriesList = fetchData('categories');
const getItemsList = ({
  categoryId,
  offset,
  searchQuery,
}) => fetchData('items/', categoryId, offset, searchQuery);
const getItem = (id) => fetchData(`items/:${id}`);
const postOrder = (body) => fetchData({ path: 'order', method: 'POST', body });

export {
  getTopSales, getCategoriesList, getItemsList, getItem, postOrder, fetchData,
};
