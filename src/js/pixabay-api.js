export function getPhotos(q) {
  const API_KEY = '43244566-bb96021fc186f0172f7edc4d3';
  const BASE_URL = 'https://pixabay.com/api/';
  const params = new URLSearchParams({
    key: API_KEY,
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}/?${params}`)
    .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json('');
  });
}
