const API_KEY = 'lIkfQ4xr_wc7GJ3j7-Xaa9ByHDD2R61EhCU-9GjEkQA';

export const searchPhotosByQuery = searchedQuery => {
  const requestParams = new URLSearchParams({
    query: searchedQuery,
    orientation: 'portrait',
    client_id: API_KEY,
    per_page: 20,
  });
  return fetch(`https://api.unsplash.com/search/photos?${requestParams}`).then(
    response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    }
  );
};
