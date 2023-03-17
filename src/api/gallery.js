const BASE_URL = 'https://api.unsplash.com';
const TOKEN = '/?client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043'

function get(url) {
  // eslint-disable-next-line prefer-template
  const fullURL = BASE_URL + url + TOKEN;

  return fetch(
    fullURL,
    { method: 'GET' })
    .then(res => res.json());
}

export const getGallery = () => get('/photos');
